/**
 * Map to store
 * @param {PaymentRequestData} data
 * @returns {Object}
 */
export default function mapToStore(data) {
    const { store = {} } = data;

    return {
        hash: store.storeHash,
        id: store.storeId,
        name: store.storeName,
    };
}