<?php
if (!defined('ABSPATH')) { exit; }

require_once FPP_HN_PATH . 'includes/class-fpp-hn-storage.php';
require_once FPP_HN_PATH . 'includes/class-fpp-hn-shortcodes.php';
require_once FPP_HN_PATH . 'admin/class-fpp-hn-admin.php';

class FPP_HN_Plugin {
    private static $instance;
    public static function instance() { return self::$instance ?: (self::$instance = new self()); }

    public static function activate() {
        FPP_HN_Storage::create_tables();
        add_option('fpp_hn_settings', [
            'recipient_email' => get_option('admin_email'),
            'consent_text' => 'Я даю согласие на обработку персональных данных.',
            'privacy_url' => '',
            'quick_exit_enabled' => 1,
            'quick_exit_url' => 'https://www.google.com',
            'allowed_file_types' => 'pdf,jpg,jpeg,png,doc,docx',
            'max_file_size_mb' => 10,
            'max_files' => 5,
        ]);
    }

    public function init() {
        add_action('wp_enqueue_scripts', [$this, 'enqueue_public_assets']);
        FPP_HN_Shortcodes::init();
        FPP_HN_Admin::init();
    }

    public function enqueue_public_assets() {
        wp_enqueue_style('fpp-hn-style', FPP_HN_URL . 'assets/css/fpp-help-navigator.css', [], FPP_HN_VERSION);
        wp_enqueue_script('fpp-hn-script', FPP_HN_URL . 'assets/js/fpp-help-navigator.js', ['jquery'], FPP_HN_VERSION, true);
        wp_localize_script('fpp-hn-script', 'fppHN', [
            'ajax' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('fpp_hn_submit'),
            'settings' => get_option('fpp_hn_settings', []),
        ]);
    }
}
