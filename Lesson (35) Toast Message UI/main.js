function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.getElementById('toast')
    if(main) {
        const icons = {
            success: 'fa-solid fa-check',
            info: 'fa-solid fa-info',
            warning: 'fa-solid fa-exclamation',
            error: 'fa-solid fa-exclamation',
        }
        const icon = icons[type]
        const toast = document.createElement('div')
        const delay = (duration / 1000).toFixed(2)
        

        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast)
        }, duration + 1000)

        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast)
                clearTimeout(autoRemoveId)
            }
        }
        toast.classList.add('toast', `toast--${type}`)
        toast.style.animation = `FadeFromRight ease .3s, FadeOut linear 1s ${delay}s forwards`
        toast.innerHTML = `
                <div class="toast__icon">
                    <i class="${icon}"></i>
                </div>

                <div class="toast__body">
                    <h3 class="toast__title">${title}</h3>
                    <p class="toast__msg">${message}</p>
                </div>
                
                <div class="toast__close">
                    <i class="fa-solid fa-xmark"></i>
                </div>
        `
        main.appendChild(toast)

    }
}
;

function showSuccessToast() {
    toast({
        title: 'Success!',
        message: 'Before, VS Code would exit the extension host process as soon as test running was finished.',
        type: 'success',
        duration: 2000,
    
    })
}
function showErrorToast() {
    toast({
        title: 'Failure!',
        message: 'Before, VS Code would exit the extension host process as soon as test running was finished.',
        type: 'error',
        duration: 3000,
    
    })
}