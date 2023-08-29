import RequestListService from "../../components/RequestListservice/RequestListservice";

export default function RequestList({ services, setState }) {
    function removeItem(e, id) {
        e.stopPropagation();
        setState(services.filter((service) => service.id !== id));
    }

    function toogleState(index) {
        const newServices = [...services];
        newServices[index].completed = !newServices[index].completed;
        setState(newServices);
    }
    return (
        <ul className="list-group container">
            {services.map((service, index) => (
                <RequestListService
                    key={service.id}
                    item={service}
                    index={index}
                    toogleState={toogleState}
                    removeItem={removeItem}
                />
            ))}
        </ul>
    );
}
