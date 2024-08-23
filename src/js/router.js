export const router = () => {
    return {
        async home(context) {
            const response = await fetch(new URL('@/pages/home.html', import.meta.url).href);
            const htmlContent = await response.text();
            document.querySelector('#main').innerHTML = htmlContent;
        },
    }
}