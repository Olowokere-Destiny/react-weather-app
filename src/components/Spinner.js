import BeatLoader from "react-spinners/BeatLoader";
export default function Spinner() {
    return (
        <div className="text-center h-screen flex items-center justify-center">
            <BeatLoader 
                color={"#3b82f6"}
            />
        </div>
    )
}