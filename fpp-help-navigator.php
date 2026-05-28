<?php
/**
 * Plugin Name: FPP Help Navigator
 * Plugin URI: https://fondpp.org/
 * Description: Навигатор помощи и динамическая форма обращения для Фонда помощи пострадавшим от преступлений.
 * Version: 0.1.0
 * Author: FPP
 * Text Domain: fpp-help-navigator
 */

if (!defined('ABSPATH')) {
    exit;
}

if (!defined('FPP_HN_VERSION')) {
    define('FPP_HN_VERSION', '0.1.0');
}

if (!defined('FPP_HN_PLUGIN_FILE')) {
    define('FPP_HN_PLUGIN_FILE', __FILE__);
}

if (!defined('FPP_HN_PLUGIN_DIR')) {
    define('FPP_HN_PLUGIN_DIR', plugin_dir_path(FPP_HN_PLUGIN_FILE));
}

if (!defined('FPP_HN_PLUGIN_URL')) {
    define('FPP_HN_PLUGIN_URL', plugin_dir_url(FPP_HN_PLUGIN_FILE));
}

function fpp_hn_activate(): void
{
    // Reserved for activation setup.
}

function fpp_hn_deactivate(): void
{
    // Reserved for deactivation cleanup.
}

register_activation_hook(FPP_HN_PLUGIN_FILE, 'fpp_hn_activate');
register_deactivation_hook(FPP_HN_PLUGIN_FILE, 'fpp_hn_deactivate');

add_action('admin_menu', static function (): void {
    add_menu_page(
        'Навигатор помощи ФПП',
        'Навигатор помощи ФПП',
        'manage_options',
        'fpp-help-navigator',
        static function (): void {
            echo '<div class="wrap"><h1>Навигатор помощи ФПП</h1><p>Плагин активен.</p></div>';
        },
        'dashicons-heart'
    );
});

add_shortcode('fpp_help_navigator', static function (): string {
    return 'Навигатор помощи ФПП подключён';
});

$main_plugin_class = FPP_HN_PLUGIN_DIR . 'includes/class-fpp-hn-plugin.php';
if (file_exists($main_plugin_class)) {
    require_once $main_plugin_class;

    if (class_exists('FPP_HN_Plugin') && method_exists('FPP_HN_Plugin', 'instance')) {
        add_action('plugins_loaded', static function (): void {
            $plugin = FPP_HN_Plugin::instance();
            if (method_exists($plugin, 'init')) {
                $plugin->init();
            }
        });
    }
}
