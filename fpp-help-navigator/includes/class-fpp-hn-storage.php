<?php
if (!defined('ABSPATH')) { exit; }

class FPP_HN_Storage {
    public static function table() { global $wpdb; return $wpdb->prefix . 'fpp_hn_requests'; }

    public static function create_tables() {
        global $wpdb;
        $charset = $wpdb->get_charset_collate();
        $sql = "CREATE TABLE " . self::table() . " (
            id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
            request_number VARCHAR(32) NOT NULL,
            status VARCHAR(32) NOT NULL DEFAULT 'new',
            full_name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            phone VARCHAR(64) NOT NULL,
            region VARCHAR(255) NOT NULL,
            category VARCHAR(255) NOT NULL,
            role VARCHAR(255) NOT NULL,
            short_description TEXT NOT NULL,
            payload LONGTEXT NOT NULL,
            files LONGTEXT NULL,
            service_comment TEXT NULL,
            created_at DATETIME NOT NULL,
            updated_at DATETIME NOT NULL,
            PRIMARY KEY (id),
            UNIQUE KEY request_number (request_number)
        ) $charset";
        require_once ABSPATH . 'wp-admin/includes/upgrade.php';
        dbDelta($sql);
    }

    public static function next_number() {
        global $wpdb;
        $year = gmdate('Y');
        $count = (int) $wpdb->get_var($wpdb->prepare("SELECT COUNT(*) FROM " . self::table() . " WHERE request_number LIKE %s", "FPP-$year-%"));
        return sprintf('FPP-%s-%06d', $year, $count + 1);
    }
}
