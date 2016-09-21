/**
 * Map to customer
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToCustomer(data) {
    const { customer = {} } = data;

    return {
        geo_ip_country_code: customer.geoCountryCode,
        id: customer.customerId,
        session_token: customer.sessionHash,
    };
}