export default function RequestListService({ service, removeService, toogleState, index }) {
    return (
        <li
            className={`list-group-item d-flex justify-content-between ${service.completed && "list-group-item-dark"
                }`}
            onClick={() => toogleState(index)}
        >
            <span className={`${service.completed && "text-decoration-line-through"} `}>
                {service.title}
            </span>
            <button
                onClick={(e) => removeService(e, service.id)}
                className="btn btn-danger "
            >
                Eliminar
            </button>
        </li>
    );
}