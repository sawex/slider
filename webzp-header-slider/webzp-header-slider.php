<?php
/**
 * Plugin Name: Custom header slider
 * Plugin URI: https://github.com/Knyazevich
 * Description: Custom two-slides header slider
 * Text Domain: webzp_r_hs
 * Domain Path: /languages
 * Author URI:  https://github.com/Knyazevich
 * Author:      Pavlo Knyazevich
 * Version:     1.0.0
 *
 * License:     GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

if ( ! defined( 'WEBZP_R_HS' ) ) {
  define( 'WEBZP_R_HS', '1.0.0' );
}

class Webzp_R_HS {

  /**
   * Static property to hold our singleton instance
   *
   */
  static $instance = false;

  /**
   * This is our constructor
   *
   * @return void
   */
  private function __construct() {
    add_action( 'plugins_loaded', array( $this, 'textdomain' ) );
    add_action( 'wp_enqueue_scripts', array( $this, 'front_scripts' ), 10 );
    add_action( 'vc_before_init', array( $this, 'load_module' ) );
  }

  /**
   * If an instance exists, this returns it.  If not, it creates one and
   * retuns it.
   *
   * @return Webzp_Share
   */

  public static function getInstance() {

    if ( ! self::$instance ) {
      self::$instance = new self;
    }

    return self::$instance;

  }

  /**
   * Load textdomain
   *
   * @return void
   */

  public function textdomain() {
    load_plugin_textdomain( 'webzp_r_hs', false, dirname( plugin_basename( __FILE__ ) ) . '/languages/' );
  }

  /**
   * Call front-end CSS and JS
   *
   * @return void
   */

  public function front_scripts() {
      wp_enqueue_style( 'webzp_r_hs_normalize', plugins_url( 'assets/css/normalize.css', __FILE__ ), array(), WEBZP_R_HS, 'all' );
      wp_enqueue_style( 'webzp_r_hs_styles', plugins_url( 'assets/css/style.css', __FILE__ ), array(), WEBZP_R_HS, 'all' );
      wp_enqueue_script( 'webzp_r_hs_slick', plugins_url( 'assets/js/slick.min.js', __FILE__ ), array(), WEBZP_R_HS, true );
      wp_enqueue_script( 'webzp_r_hs_common', plugins_url( 'assets/js/common.js', __FILE__ ), array(), WEBZP_R_HS, true );
  }

  /**
   * Load all custom Visual Composer modules
   *
   * @return void
   */

  public function load_module() {
    require_once( plugin_dir_path( __FILE__ ) . '/webzp-r-header-slider-module.php' );
  }

}

// Instantiate our class
$Webzp_R_HS = Webzp_R_HS::getInstance();