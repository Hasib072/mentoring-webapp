export const getTest = async () => {
    try{
        const res = await fetch('https://localhost:8080/test', {
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });

        return await res.json();

    }catch (err) {}
};