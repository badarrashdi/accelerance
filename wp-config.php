<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress local file*/

define( 'DB_NAME', 'accelerance' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'J[pKB+=%uCuo$j/A6~&0|I-|t:~.lx2PQ>mWBj))9%2:[^p0bfI?z$-Yhm74(f; ' );
define( 'SECURE_AUTH_KEY',  '/zn{SYp3G?*JMJX1dWPN_)BK!5c@~]p]P)d:_}+M(.+wn4q$%3JbTXyg4I^T2U{U' );
define( 'LOGGED_IN_KEY',    'a[.gh)uQs_=4#5[||Wp^k/ceG@5E?cS C9^UiJarz4g]|VUGcdJD$,&?G+.~[6nr' );
define( 'NONCE_KEY',        '4]TXmVO9RuQ7JlU3n]czW|=z@Cv00VS#TS~EdhEA`I9ivX`o5r1(iy.>;$+#//nf' );
define( 'AUTH_SALT',        '8{.)D{<{L=SJkxSzEk|LX4Mh[fySow$$g0Cm4$ChDLazM[Pa` jy%QyX4d21pcoq' );
define( 'SECURE_AUTH_SALT', 'RqLZa*}FEy)u WCB!u3Be2ZI75<?W:cU:X]s4)i|X0Eer)f`#:_Y7$;&C[E^j}G)' );
define( 'LOGGED_IN_SALT',   'tX5nC_80){^t1zYew.~JcK alf.]GY}LrQ6Vohpr+<GJAbIA|a( M30d*,P,_]3u' );
define( 'NONCE_SALT',       '%|YlP{.I:Hy_{Hwk,a0$#d!L}[$L7(7FX^OY;|]Et=5v%UY{8ma-%_LS4,B/JyE?' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'acc_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
