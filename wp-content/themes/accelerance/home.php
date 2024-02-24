<?php
/**
 * Template Name: Homepage
 *
 * @package  WordPress
 * @subpackage  Timber
 */

 $context = Timber::context();

 $timber_post     = Timber::get_post();
 $context['post'] = $timber_post;
 Timber::render( array( 'home.twig' ), $context );