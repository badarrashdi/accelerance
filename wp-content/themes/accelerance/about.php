<?php
/**
 * Template Name: About us
 *
 * @package  WordPress
 * @subpackage  Timber
 */

 $context = Timber::context();

 $timber_post     = Timber::get_post();
 $context['post'] = $timber_post;
 Timber::render( array( 'about.twig' ), $context );