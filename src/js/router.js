export const router = () => {
    return {
        async home(context) {
            const response = await fetch(new URL('@/home', import.meta.url).href);
            const htmlContent = await response.text();
            document.querySelector('#main').innerHTML = htmlContent;
        },
    }
}