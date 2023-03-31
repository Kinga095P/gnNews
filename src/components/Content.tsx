import { useAppSelector } from "../hooks/useTypeSelector";
import List from "./List";
import ActionAreaCard from "./Tiles";

export function Content() {
    const selectedDisplayForm: string = useAppSelector(state => state.selectedDisplayFormReducer.value);

    return (
        <div>
            {selectedDisplayForm === "list" ? (
                <List />
            ) : (<ActionAreaCard />)
            }
        </div>
    );
}