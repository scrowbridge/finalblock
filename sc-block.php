<?php
/**
 * Plugin Name:     sc-block
 * Description:     A collection of editors blocks
 * Version:         0.1.0
 * Author:          Sara
 * License:         GPL-2.0-or-later
 * License URI:     https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:     sc-block
 *
 * @package         sc-block
 */

/**
 * Registers all block assets so that they can be enqueued through the block editor
 * in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/applying-styles-with-stylesheets/
 */
function sc_block_sc_block_block_init() {
	$dir = __DIR__;

	$script_asset_path = "$dir/build/index.asset.php";
	if ( ! file_exists( $script_asset_path ) ) {
		throw new Error(
			'You need to run `npm start` or `npm run build` for the "sc-block/sc-block" block first.'
		);
	}
	$index_js     = 'build/index.js';
	$script_asset = require( $script_asset_path );
	wp_register_script(
		'sc-block-sc-block-block-editor',
		plugins_url( $index_js, __FILE__ ),
		$script_asset['dependencies'],
		$script_asset['version']
	);
	wp_set_script_translations( 'sc-block-sc-block-block-editor', 'sc-block' );

	$editor_css = 'build/index.css';
	wp_register_style(
		'sc-block-sc-block-block-editor',
		plugins_url( $editor_css, __FILE__ ),
		array(),
		filemtime( "$dir/$editor_css" )
	);

	$style_css = 'build/style-index.css';
	wp_register_style(
		'sc-block-sc-block-block',
		plugins_url( $style_css, __FILE__ ),
		array(),
		filemtime( "$dir/$style_css" )
	);

	register_block_type(
		'sc-block/sc-block',
		array(
			'editor_script' => 'sc-block-sc-block-block-editor',
			'editor_style'  => 'sc-block-sc-block-block-editor',
			'style'         => 'sc-block-sc-block-block',
		)
	);
}
add_action( 'init', 'sc_block_sc_block_block_init' );
