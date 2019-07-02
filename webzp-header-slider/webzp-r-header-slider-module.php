<?php

class Webzp_R_Header_Slider {

  /**
   * Main constructor
   *
   * @since 1.0.0
   */
  public function __construct() {
    
    // Registers the shortcode in WordPress
    add_shortcode( 'webzp_r_header_slider', array( 'Webzp_R_Header_Slider', 'output' ) );

    // Map shortcode to Visual Composer
    if ( function_exists( 'vc_lean_map' ) ) {
      vc_lean_map( 'webzp_r_header_slider', array( 'Webzp_R_Header_Slider', 'map' ) );
    }

  }

  /**
   * Shortcode output
   *
   * @since 1.0.0
   */
  public static function output( $atts, $content = null ) {

    // Extract shortcode attributes (based on the vc_lean_map function - see next function)
    extract( vc_map_get_attributes( 'webzp_r_header_slider', $atts ) );

    $first_slide_img = wp_get_attachment_image_url( $first_slide_bg, 'full' );
    $second_slide_img = wp_get_attachment_image_url( $second_slide_bg, 'full' );

    $first_slide_icon = wp_get_attachment_image_url( $first_slide_icon, 'full' );
    $second_slide_icon = wp_get_attachment_image_url( $second_slide_icon, 'full' );

    $first_slide_href = vc_build_link( $first_slide_link )['url'];
    $second_slide_href = vc_build_link( $second_slide_link )['url'];

    // var_dump( $first_slide_bg );

    return <<<HTML
  <div class="main mobile-hight" style="height: 100vh; z-index: 9999">
    <section class="slider">
      <div class="slider__container">
        <a href="$first_slide_href" class="slider__slide slider__slide-left">
          <figure class="slider__slide-img slider__slide-img-left"
                  style="background: url('$first_slide_img') no-repeat center !important;"></figure>
          <header class="slider__slide-header">
            <h2 class="slider__slide-title">$first_title</h2>
            <p class="slider__slide-desc--dt">$first_slide_desc</p>
          </header>
        </a>

        <a href="$second_slide_href" class="slider__slide slider__slide-right">
          <figure class="slider__slide-img slider__slide-img-right"
                  style="background: url('$second_slide_img') no-repeat center !important;"></figure>
          <header class="slider__slide-header">
            <h2 class="slider__slide-title">$second_title</h2>
            <p class="slider__slide-desc--dt">$second_slide_desc</p>
          </header>     
        </a>
        <div class="after-separator"></div>
        <p class="slider__description">$slider_desc</p>
      </div>

      <div class="mobile-slider">
        <div class="mobile-slider__container">
          <a href="#" class="slider__slide absolute">
            <header class="mobile-slider__slide-header slider__slide--top">
              <h2 class="slider__slide-title slider__slide-title--top">$first_title</h2>
            </header>
          </a>

          <a href="#" class="slider__slide">
            <header class="mobile-slider__slide-header slider__slide--bottom">
              <h2 class="slider__slide-title slider__slide-title--bottom">$second_title</h2>
            </header>     
          </a>
          <p class="mobile-slider__text-desc">$slider_desc</p>
        </div>

        <div class="mobile-slider__active-slider slider-hidden" style="overflow: hidden;">
          <a href="$first_slide_href" class="slider__slide">
            <figure class="mobile-slider__slide-img slider__slide-img-left"
                    style="background: url('$first_slide_img') no-repeat center !important;">
            </figure>
            <header class="mobile-slider__slide-header">
              <h2 class="slider__slide-title">$first_title</h2>
              <p class="slider__slide-desc first-desc">$first_slide_desc</p>
            </header>
          </a>

          <a href="$second_slide_href" class="slider__slide">
            <figure class="mobile-slider__slide-img slider__slide-img-right"
                    style="background: url('$second_slide_img') no-repeat center !important;"></figure>
            <header class="mobile-slider__slide-header">
              <h2 class="slider__slide-title">$second_title</h2>
              <p class="slider__slide-desc second-desc">$second_slide_desc</p>
            </header>
          </a>
        </div>
      </div>
    </section>
  </div>

  <style type="text/css">
    .slider__slide-left .slider__slide-header .slider__slide-desc--dt::before {
      content: url('$first_slide_icon');
      display: block;
    }

    .slider__slide-img-left ~ .mobile-slider__slide-header .slider__slide-desc::before {
      content: url('$first_slide_icon');
    }

    .slider__slide-right .slider__slide-header .slider__slide-desc--dt::before {
      content: url('$second_slide_icon');
      display: block;
    }

    .slider__slide-img-right ~ .mobile-slider__slide-header .slider__slide-desc::before {
      content: url('$second_slide_icon');
    }
  </style>
HTML;

  }

  /**
   * Map shortcode to VC
   *
   * This is an array of all your settings which become the shortcode attributes ($atts)
   * for the output. See the link below for a description of all available parameters.
   *
   * @since 1.0.0
   * @link  https://wpbakery.atlassian.net/wiki/pages/viewpage.action?pageId=38993922
   */
  public static function map() {
    return array(
      'name' => esc_html__( 'Header Slider', 'webzp_r_hs' ),
      'description' => esc_html__( 'Outputs header slider.', 'webzp_r_hs' ),
      'category' => esc_html__( 'Content', 'webzp_r_hs' ),
      'base' => 'webzp_r_header_slider',
      'params'      => array(
          array(
            'type'       => 'textfield',
            'heading'    => esc_html__( 'First slide title', 'webzp_r_hs' ),
            'param_name' => 'first_title',
            'value'      => '',
          ),

          array(
            'type'       => 'textfield',
            'heading'    => esc_html__( 'Second slide title', 'webzp_r_hs' ),
            'param_name' => 'second_title',
            'value'      => '',
          ),

          array(
            'type'       => 'textfield',
            'heading'    => esc_html__( 'First slide description', 'webzp_r_hs' ),
            'param_name' => 'first_slide_desc',
            'value'      => '',
          ),

          array(
            'type'       => 'textfield',
            'heading'    => esc_html__( 'Second slide description', 'webzp_r_hs' ),
            'param_name' => 'second_slide_desc',
            'value'      => '',
          ),

          array(
            'type'       => 'textarea',
            'heading'    => esc_html__( 'Slider bottom description', 'webzp_r_hs' ),
            'param_name' => 'slider_desc',
            'value'      => '',
          ),

          array(
            'type'       => 'attach_image',
            'heading'    => esc_html__( 'First slide background', 'webzp_r_hs' ),
            'param_name' => 'first_slide_bg',
            'value'      => '',
          ),

          array(
            'type'       => 'attach_image',
            'heading'    => esc_html__( 'Second slide background', 'webzp_r_hs' ),
            'param_name' => 'second_slide_bg',
            'value'      => '',
          ),

          array(
            'type'       => 'attach_image',
            'heading'    => esc_html__( 'First slide icon', 'webzp_r_hs' ),
            'param_name' => 'first_slide_icon',
            'value'      => '',
          ),

          array(
            'type'       => 'attach_image',
            'heading'    => esc_html__( 'Second slide icon', 'webzp_r_hs' ),
            'param_name' => 'second_slide_icon',
            'value'      => '',
          ),

          array(
            'type'       => 'vc_link',
            'heading'    => esc_html__( 'First slide link', 'webzp_r_hs' ),
            'param_name' => 'first_slide_link',
            'value'      => '',
          ),

          array(
            'type'       => 'vc_link',
            'heading'    => esc_html__( 'Second slide link', 'webzp_r_hs' ),
            'param_name' => 'second_slide_link',
            'value'      => '',
          ),
        ),
    );
  }

}

new Webzp_R_Header_Slider;