/**
 * Internal dependencies
 */
import { getConfig } from 'utils/checkout';
import woopayButtonSrc from 'wcpay/../assets/images/buy-now-woopay.png';

const WooPay = ( { isStatic } ) => {
	const image = <img src={ woopayButtonSrc } alt="Buy now with WooPay" />;
	if ( isStatic ) {
		return image;
	}

	const encodedOrigin = encodeURIComponent( window.location.origin );
	const woopayUrl = 'http://localhost:8086/woopay/';
	const href = `${ woopayUrl }?origin=${ encodedOrigin }`;
	return <a href={ href }>{ image }</a>;
};

const woopayPaymentMethod = {
	name: 'woopay',
	content: <WooPay />,
	edit: <WooPay isStatic />,
	canMakePayment: () => true,
	paymentMethodId: 'woocommerce_payments',
	supports: {
		features: getConfig( 'features' ),
	},
};

export default woopayPaymentMethod;
