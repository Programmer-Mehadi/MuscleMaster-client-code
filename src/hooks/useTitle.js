import { useEffect } from "react";

const useTitle = title => {
    useEffect(() => {
        document.title = `${title}-MuscleMaster`;
    }, [title])
}

export default useTitle;