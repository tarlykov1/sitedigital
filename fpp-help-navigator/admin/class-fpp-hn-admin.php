<?php
if (!defined('ABSPATH')) { exit; }

class FPP_HN_Admin {
    public static function init() {
        add_action('admin_menu', [__CLASS__, 'menu']);
        add_action('admin_init', [__CLASS__, 'register_settings']);
    }
    public static function menu() {
        add_menu_page('Навигатор помощи ФПП', 'Навигатор помощи ФПП', 'manage_options', 'fpp-hn', [__CLASS__, 'requests_page'], 'dashicons-shield', 26);
        add_submenu_page('fpp-hn', 'Обращения', 'Обращения', 'manage_options', 'fpp-hn', [__CLASS__, 'requests_page']);
        foreach (['Сценарии','Вопросы','Поля формы','Правила отображения','Документы и чек-листы','Настройки'] as $i => $label) {
            add_submenu_page('fpp-hn', $label, $label, 'manage_options', 'fpp-hn-' . $i, $i===5 ? [__CLASS__,'settings_page'] : [__CLASS__, 'stub_page']);
        }
    }
    public static function register_settings() { register_setting('fpp_hn_settings_group', 'fpp_hn_settings'); }
    public static function stub_page() { echo '<div class="wrap"><h1>Раздел будет расширен в следующих версиях MVP</h1></div>'; }
    public static function settings_page() { echo '<div class="wrap"><h1>Настройки</h1><form method="post" action="options.php">'; settings_fields('fpp_hn_settings_group'); $s=get_option('fpp_hn_settings',[]); echo '<table class="form-table"><tr><th>Email получателя</th><td><input name="fpp_hn_settings[recipient_email]" value="'.esc_attr($s['recipient_email'] ?? '').'" class="regular-text"></td></tr><tr><th>URL быстрого выхода</th><td><input name="fpp_hn_settings[quick_exit_url]" value="'.esc_attr($s['quick_exit_url'] ?? '').'" class="regular-text"></td></tr></table>'; submit_button(); echo '</form></div>'; }
    public static function requests_page() {
        global $wpdb;
        if (!empty($_POST['fpp_update_status']) && check_admin_referer('fpp_update_status')) {
            $wpdb->update(FPP_HN_Storage::table(), ['status'=>sanitize_text_field(wp_unslash($_POST['status'])),'updated_at'=>current_time('mysql')], ['id'=>absint($_POST['id'])]);
        }
        $rows = $wpdb->get_results("SELECT * FROM " . FPP_HN_Storage::table() . " ORDER BY created_at DESC LIMIT 200");
        echo '<div class="wrap"><h1>Обращения</h1><table class="widefat"><thead><tr><th>Номер</th><th>Дата</th><th>ФИО</th><th>Email</th><th>Телефон</th><th>Категория</th><th>Регион</th><th>Статус</th></tr></thead><tbody>';
        foreach ($rows as $r) {
            echo '<tr><td>'.esc_html($r->request_number).'</td><td>'.esc_html($r->created_at).'</td><td>'.esc_html($r->full_name).'</td><td>'.esc_html($r->email).'</td><td>'.esc_html($r->phone).'</td><td>'.esc_html($r->category).'</td><td>'.esc_html($r->region).'</td><td><form method="post">';
            wp_nonce_field('fpp_update_status');
            echo '<input type="hidden" name="id" value="'.esc_attr($r->id).'"><select name="status">';
            foreach (['new'=>'новое','registered'=>'зарегистрировано','in_progress'=>'в работе','need_docs'=>'нужны документы','answered'=>'ответ подготовлен','closed'=>'закрыто','rejected'=>'отклонено'] as $k=>$v) { echo '<option value="'.esc_attr($k).'" '.selected($r->status,$k,false).'>'.esc_html($v).'</option>'; }
            echo '</select> <button class="button" name="fpp_update_status" value="1">Сохранить</button></form></td></tr>';
        }
        echo '</tbody></table></div>';
    }
}
