import { createContext, useState, useContext } from 'react';

const PanelContext = createContext(
    {
        updateOffer: () => { },
        updateOfferMessage: null,
        updateRequest: () => { },
        updateRequestMessage: null,
        // refreshOffersList: () => { },
        // deleteRequest: () => { },
        // deleteRequestMessage: null,
        // addRequest: () => { },
        // addRequestMessage: null,
        // addOffer: () => { },
        // addOfferMessage: null,
    });


export default function PanelContextProvider({ children }) {

    const [offer, setOffer] = useState(null);
    const [request, setRequest] = useState(null);

    const [updateOfferMessage, setUpdateOfferMessage] = useState(null);
    const [updateRequestMessage, setUpdateRequestMessage] = useState(null);

    // const [deleteRequestMessage, setDeleteRequestMessage] = useState(null);

    // const [addOfferMessage, setAddOfferMessage] = useState(null);
    // const [addRequestMessage, setAddRequestMessage] = useState(null);


    // setTimeout(() => {
    //     setAddOfferMessage(null)
    // }, 3000)

    // setTimeout(() => {
    //     setAddRequestMessage(null)
    // }, 3000)

    setTimeout(() => {
        setUpdateOfferMessage(null)
    }, 3000)

    setTimeout(() => {
        setUpdateRequestMessage(null)
    }, 3000)


    // setTimeout(() => {
    //     setDeleteRequestMessage(null)
    // }, 3000)

    async function updateOffer(id) {

        const response = await fetch(
            `http://localhost:3006/offers/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        if (response.ok) {
            setOffer(await response.json())
            setUpdateOfferMessage("¡Oferta actualizada!")
        } else {
            setUpdateOfferMessage("Inténtalo de nuevo.")
        }
    }

    async function updateRequest(id) {

        const response = await fetch(
            `http://localhost:3006/requests/${id}`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }
        )
        if (response.ok) {
            setRequest(await response.json())
            setUpdateRequestMessage("¡Demanda actualizada!")
        } else {
            setUpdateRequestMessage("Inténtalo de nuevo.")
        }
    }









    const value = {
        updateOffer, updateOfferMessage, offer,
        // addOffer, addOfferMessage ,
        // refreshOffersList,
        // addRequestMessage, deleteRequestMessage, 
        request, updateRequestMessage, updateRequest
    };

    return (
        <PanelContext.Provider value={value}>{children}</PanelContext.Provider>
    );
}

// eslint-disable-next-line react-refresh/only-export-components
export function usePanelContext() {
    return useContext(PanelContext);
}