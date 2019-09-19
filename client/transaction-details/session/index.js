/** @format **/

/**
 * External dependencies
 */
import { Card } from '@woocommerce/components';

/**
 * Internal dependencies.
 */

const TransactionSessionDetails = ( props ) => {
	const { transaction } = props;
	return (
		<Card title="Session">
			Session details for transaction { transaction.id }.
		</Card>
	);
};

export default TransactionSessionDetails;
