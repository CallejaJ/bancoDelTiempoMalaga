// data adquisition object DAO contiene todas las funciones que nos servirán de enlace
// entre el controlador y la bbdd

const userQueries = require("./queries/userQueries");
const offerQueries = require("./queries/offerQueries");
const requestQueries = require("./queries/requestQueries");
const serviceQueries = require("./queries/serviceQueries");
const messageQueries = require("./queries/messageQueries");
const transferQueries = require("./queries/transferQueries");
const creditQueries = require("./queries/creditQueries");


const dao = {}

// ** USER ** //

// obtener la lista de usuarios
dao.getUsers = async () => await userQueries.getUsers();

// buscar un usuario por el email
dao.getUserByEmail = async (email) => await userQueries.getUserByEmail(email);

// buscar un usuario por el id
dao.getUserById = async (id) => await userQueries.getUserById(id);

// añadir un nuevo usuario
dao.addUser = async (userData) => await userQueries.addUser(userData);

// borrar un nuevo usuario
dao.deleteUser = async (userData) => await userQueries.deleteUser(userData);

// modificar un usuario
dao.updateUser = async (id, userData) => await userQueries.updateUser(id, userData);

// ** OFFER ** //

// buscar todas las ofertas
dao.getOffers = async () => await offerQueries.getOffers();

// buscar una oferta por el id de la oferta
dao.getOfferById = async (id) => await offerQueries.getOfferById(id);

// buscar todas las ofertas por el id del usuario
dao.getUserOffers = async (user_id) => await offerQueries.getUserOffers(user_id);

// buscar cuantas ofertas ha publicado un usuario por su id
dao.countUserOffers = async (user_id) => await offerQueries.countUserOffers(user_id);


// añadir un nueva oferta
dao.addOffer = async (offerData, id) => await offerQueries.addOffer(offerData, id);

// borrar un oferta por su id
dao.deleteOffer = async (offerData) => await offerQueries.deleteOffer(offerData);

// modificar una oferta por su id
dao.updateOffer = async (id, offerData) => await offerQueries.updateOffer(id, offerData);

// ** REQUEST ** //

// buscar todas las demandas
dao.getRequests = async () => await requestQueries.getRequests();

// buscar una demanda por su id
dao.getRequestById = async (id) => await requestQueries.getRequestById(id);

// buscar todas las demandas por el id del usuario
dao.getUserRequests = async (user_id) => await requestQueries.getUserRequests(user_id);

// añadir un nueva demanda
dao.addRequest = async (id, requestData) => await requestQueries.addRequest(requestData, id);

// buscar cuantas demandas ha publicado un usuario por su id
dao.countUserRequests = async (user_id) => await requestQueries.countUserRequests(user_id);

// borrar un demanda por su id
dao.deleteRequest = async (requestData) => await requestQueries.deleteRequest(requestData);

// modificar una oferta por su id
dao.updateRequest = async (id, requestData) => await requestQueries.updateRequest(id, requestData);


// ** SERVICES ** //

// buscar todas los servicios
dao.getServices = async () => await serviceQueries.getServices();

// buscar un servicio por id
dao.getServiceById = async (id) => await serviceQueries.getServiceById(id);

// añadir un nuevo servicio
dao.addService = async (serviceData) => await serviceQueries.addService(serviceData);

// borrar un servicio por su id
dao.deleteService = async (id) => await serviceQueries.deleteService(id);

// modificar un servicio por su id
dao.updateService = async (id, serviceData) => await serviceQueries.updateService(id, serviceData)


// ** MESSAGES ** //

// // obtener todos los mensajes de una oferta por su id
dao.getOfferMessagesById = async (id) => await messageQueries.getOfferMessagesById(id)

// crear una nuevo mensaje
dao.addMessageToOffer = async (id, messageData, userID) => await messageQueries.addMessageToOffer(id, messageData, userID)

// // obtener todos los mensajes de una demanda por su id
dao.getRequestMessagesById = async (id) => await messageQueries.getRequestMessagesById(id)

// crear una nueva demanda
dao.addMessageToRequest = async (id, messageData, userID) => await messageQueries.addMessageToRequest(id, messageData, userID)

// ** TRANSFERS ** //

// obtener todas las peticiones de transferencias de créditos
dao.getOfferTransfers = async (user_id) => await transferQueries.getOfferTransfers(user_id)

// añadir una petición de transferencia de créditos
dao.addOrderTransfer = async (id, transferData) => await transferQueries.addOrderTransfer(id, transferData);

// obtener los detalles de una oferta por su id
dao.getOfferTransferById = async (id) => await transferQueries.getOfferTransferById(id)

// borrar una petición de transferencia de créditos
dao.deleteOrderTransfer = async (id) => await transferQueries.deleteOrderTransfer(id)

// ** CREDITS ** //

// hacer una query que contenga:
// creditos a transferir, user_id de quien envía, user_id de quien recibe
// el número de créditos de quien envía y el número de créditos de quien recibe
dao.getTransferDetailsRequested = async (id) => await creditQueries.getTransferDetailsRequested(id)

// actualizar el nuevo saldo de créditos
dao.updateCreditsBalance = async (user_id, credits) => await creditQueries.updateCreditsBalance(user_id, credits)

// eliminar el registro de la tabla de offer_credits_messages
dao.deleteOfferMessagesRegistry = async (id) => await creditQueries.deleteOfferMessagesRegistry(id)

// hacer una query que contenga:
// user_id de quien envía, user_id de quien recibe
// el número de créditos de quien envía y el número de créditos de quien recibe
dao.getCreditDetailsById = async (userID) => await creditQueries.getCreditDetailsById(userID)



module.exports = dao;