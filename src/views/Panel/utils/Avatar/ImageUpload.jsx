import { useCallback, useEffect, useMemo, useState } from "react";
import { useDropzone } from "react-dropzone";

const baseStyle = {
    display: "flex",
    borderWidth: 0,
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    borderColor: "#eeeeee",
    borderStyle: "dashed",
    backgroundColor: "#fafafa",
    color: "#bdbdbd",
    transition: "border .4s ease-in-out"
};

const activeStyle = {
    borderColor: "#2196f3"
};

const acceptStyle = {
    borderColor: "#00e676"
};

const rejectStyle = {
    borderColor: "#ff1744"
};

const ImageUpload = () => {
    const [files, setFiles] = useState([]);

    const onDrop = useCallback((acceptedFiles) => {
        if (acceptedFiles.length !== 0) {
            setFiles(
                acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file)
                    })
                )
            );
        }
    }, []);

    console.log(files);

    const {
        getRootProps,
        getInputProps,
        isDragActive,
        isDragAccept,
        isDragReject
    } = useDropzone({
        onDrop,
        accept: "image/jpeg, image/png"
    });

    const thumbsContainer = {
        width: "120px",
        height: "120px",
        borderRadius: "50%",
        objectFit: "cover",
        objectPosition: "center"
    };

    const style = useMemo(
        () => ({
            ...baseStyle,
            ...(isDragActive ? activeStyle : {}),
            ...(isDragAccept ? acceptStyle : {}),
            ...(isDragReject ? rejectStyle : {})
        }),
        [isDragActive, isDragReject, isDragAccept]
    );

    const thumbs = files.map((file) => (
        <div key={file.name}>
            <img style={thumbsContainer} src={file.preview} alt={file.name} />
        </div>
    ));

    useEffect(
        () => () => {
            files.forEach((file) => URL.revokeObjectURL(file.preview));
        },
        [files]
    );

    return (
        <section style={{ margin: "1rem" }}>
            <div {...getRootProps({ style })}>
                <input {...getInputProps()} />
                <div className="fileDrop">Haz click o arrastra tu imagen aquí</div>
                <aside>{thumbs}</aside>
                {thumbs.length === 0 && (
                    <img
                        style={thumbsContainer}
                        src="https://upload.wikimedia.org/wikipedia/commons/0/09/Man_Silhouette.png"
                        alt="default"
                    />
                )}
            </div>
        </section>
    );
};

export { ImageUpload };
