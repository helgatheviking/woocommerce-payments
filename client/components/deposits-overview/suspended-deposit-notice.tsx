/**
 * External dependencies
 */
import React from 'react';
import { __ } from '@wordpress/i18n';
import interpolateComponents from '@automattic/interpolate-components';
import { Link } from '@woocommerce/components';

/**
 * Internal dependencies
 */
import InlineNotice from 'components/inline-notice';

/**
 * Renders a notice informing the user that their deposits are suspended.
 *
 * @return {JSX.Element} Rendered notice.
 */
function SuspendedDepositNotice(): JSX.Element {
	return (
		<InlineNotice
			className="wcpay-deposits-overview__suspended-notice"
			icon
			isDismissible={ false }
			status="warning"
		>
			{ interpolateComponents( {
				/** translators: {{strong}}: placeholders are opening and closing strong tags. {{suspendLink}}: is a <a> link element */
				mixedString: __(
					'Your deposits are {{strong}}temporarily suspended{{/strong}}. {{suspendLink}}Learn more{{/suspendLink}}',
					'woocommerce-payments'
				),
				components: {
					strong: <strong />,
					suspendLink: (
						<Link
							href={
								'https://woocommerce.com/document/woopayments/deposits/why-deposits-suspended/'
							}
						/>
					),
				},
			} ) }
		</InlineNotice>
	);
}

export default SuspendedDepositNotice;
