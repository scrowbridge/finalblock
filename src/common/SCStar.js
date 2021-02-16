import {__} from "@wordpress/i18n";
import {select} from "@wordpress/data";
import {SelectControl} from "@wordpress/components";

export class SCStar extends React.Component {


	render() {
		let {attributes, setAttributes} = this.props;

		return (
			<SelectControl
				label={__('Select a rating:')}
				value={attributes.stars} // e.g: value = [ 'a', 'c' ]
				onChange={(stars) => {
					setAttributes({stars})
				}}
				options={[
					{value: '1', label: '*'},
					{value: '2', label: '**'},
					{value: '3', label: '***'},
					{value: '4', label: '****'},
					{value: '5', label: '*****'},
				]}
			/>
		)
	}
}
