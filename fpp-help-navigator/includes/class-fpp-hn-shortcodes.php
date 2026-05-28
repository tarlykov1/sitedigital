<?php
if (!defined('ABSPATH')) { exit; }

class FPP_HN_Shortcodes {
    public static function init() {
        add_shortcode('fpp_help_navigator', [__CLASS__, 'navigator']);
        add_shortcode('fpp_help_form', [__CLASS__, 'form']);
        add_shortcode('fpp_help_status', fn() => '<div class="fpp-hn-status">Проверка статуса будет добавлена в следующих версиях.</div>');
        add_shortcode('fpp_help_documents', fn() => '<div class="fpp-hn-docs">Документы и чек-листы можно настроить в админке.</div>');
        add_action('wp_ajax_fpp_hn_submit', [__CLASS__, 'submit']);
        add_action('wp_ajax_nopriv_fpp_hn_submit', [__CLASS__, 'submit']);
    }
    public static function navigator() { ob_start(); include FPP_HN_PATH . 'templates/navigator.php'; return ob_get_clean(); }
    public static function form() { ob_start(); include FPP_HN_PATH . 'templates/form.php'; return ob_get_clean(); }

    public static function submit() {
        check_ajax_referer('fpp_hn_submit', 'nonce');
        if (!empty($_POST['website'])) wp_send_json_error(['message' => 'Spam detected']);
        $required = ['full_name','email','phone','region','category','consent_pd','consent_rules'];
        foreach ($required as $field) { if (empty($_POST[$field])) wp_send_json_error(['message' => 'Заполните обязательные поля']); }

        $payload = array_map('sanitize_text_field', wp_unslash($_POST));
        $number = FPP_HN_Storage::next_number();
        $files_saved = [];
        if (!empty($_FILES['attachments']) && !empty($_FILES['attachments']['name'][0])) {
            require_once ABSPATH . 'wp-admin/includes/file.php';
            $allowed = array_map('trim', explode(',', (get_option('fpp_hn_settings', [])['allowed_file_types'] ?? 'pdf,jpg,jpeg,png')));
            foreach ($_FILES['attachments']['name'] as $i => $name) {
                $ext = strtolower(pathinfo($name, PATHINFO_EXTENSION));
                if (!in_array($ext, $allowed, true)) continue;
                $file = ['name'=>$name,'type'=>$_FILES['attachments']['type'][$i],'tmp_name'=>$_FILES['attachments']['tmp_name'][$i],'error'=>$_FILES['attachments']['error'][$i],'size'=>$_FILES['attachments']['size'][$i]];
                $move = wp_handle_upload($file, ['test_form'=>false]);
                if (empty($move['error'])) $files_saved[] = esc_url_raw($move['url']);
            }
        }
        global $wpdb;
        $now = current_time('mysql');
        $wpdb->insert(FPP_HN_Storage::table(), [
            'request_number'=>$number,'status'=>'new','full_name'=>sanitize_text_field(wp_unslash($_POST['full_name'])),'email'=>sanitize_email(wp_unslash($_POST['email'])),
            'phone'=>sanitize_text_field(wp_unslash($_POST['phone'])),'region'=>sanitize_text_field(wp_unslash($_POST['region'])),'category'=>sanitize_text_field(wp_unslash($_POST['category'])),
            'role'=>sanitize_text_field(wp_unslash($_POST['role'] ?? '')),'short_description'=>sanitize_textarea_field(wp_unslash($_POST['description'] ?? '')),
            'payload'=>wp_json_encode($payload, JSON_UNESCAPED_UNICODE),'files'=>wp_json_encode($files_saved),'created_at'=>$now,'updated_at'=>$now,
        ]);

        $settings = get_option('fpp_hn_settings', []);
        wp_mail(sanitize_email($_POST['email']), 'Ваше обращение в Фонд принято', "Здравствуйте.\n\nВаше обращение принято.\nНомер обращения: $number.\n\nСохраните этот номер. Он может понадобиться для уточнения статуса обращения.\n\nФонд оказывает помощь бесплатно. Если кто-то просит оплату от имени Фонда, это мошенники.");
        wp_mail($settings['recipient_email'] ?? get_option('admin_email'), 'Новое обращение: '.sanitize_text_field($_POST['category']).' / '.sanitize_text_field($_POST['region']), "Номер: $number\nФИО: ".sanitize_text_field($_POST['full_name'])."\nEmail: ".sanitize_email($_POST['email']));

        wp_send_json_success(['message'=>"Обращение принято. Номер обращения: $number. Сохраните этот номер. Он может понадобиться для уточнения статуса обращения."]);
    }
}
