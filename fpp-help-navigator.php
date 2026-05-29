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
    define('FPP_HN_PLUGIN_DIR', plugin_dir_path(__FILE__));
}

if (!defined('FPP_HN_PLUGIN_URL')) {
    define('FPP_HN_PLUGIN_URL', plugin_dir_url(__FILE__));
}

function fpp_hn_activate(): void
{
    // Reserved for activation setup.
}

function fpp_hn_deactivate(): void
{
    // Reserved for deactivation cleanup.
}

function fpp_hn_render_admin_page(): void
{
    echo '<div class="wrap"><h1>' . esc_html__('Навигатор помощи ФПП', 'fpp-help-navigator') . '</h1><p>' . esc_html__('Плагин активен.', 'fpp-help-navigator') . '</p></div>';
}

function fpp_hn_register_admin_menu(): void
{
    add_menu_page(
        __('Навигатор помощи ФПП', 'fpp-help-navigator'),
        __('Навигатор помощи ФПП', 'fpp-help-navigator'),
        'manage_options',
        'fpp-help-navigator',
        'fpp_hn_render_admin_page',
        'dashicons-heart',
        26
    );
}

function fpp_hn_render_shortcode(): string
{
    return 'Навигатор помощи ФПП подключён';
}

register_activation_hook(FPP_HN_PLUGIN_FILE, 'fpp_hn_activate');
register_deactivation_hook(FPP_HN_PLUGIN_FILE, 'fpp_hn_deactivate');

add_action('admin_menu', 'fpp_hn_register_admin_menu');
add_shortcode('fpp_help_navigator', 'fpp_hn_render_shortcode');
