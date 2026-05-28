<?php
/**
 * Plugin Name: FPP Help Navigator
 * Description: Интерактивный навигатор помощи и форма обращения для ФПП.
 * Version: 0.1.0
 * Author: FPP
 * Text Domain: fpp-help-navigator
 */

if (!defined('ABSPATH')) { exit; }

define('FPP_HN_VERSION', '0.1.0');
define('FPP_HN_PATH', plugin_dir_path(__FILE__));
define('FPP_HN_URL', plugin_dir_url(__FILE__));

require_once FPP_HN_PATH . 'includes/class-fpp-hn-plugin.php';

register_activation_hook(__FILE__, ['FPP_HN_Plugin', 'activate']);

add_action('plugins_loaded', function() {
    FPP_HN_Plugin::instance()->init();
});
