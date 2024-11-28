export function toastSucess(msg) {
    const toast = document.getElementById("toast")
    toast.innerHTML = `
    <div class="alert alert-success">
          <span class="text-zinc-100">${msg}</span>
    </div>
    `
    toast.style.display = "block"
    toast.style.opacity = '1'
    setTimeout(() => {
        toast.style.opacity = '0'
        setTimeout(() => toast.style.display = "none", 500)
    }, 2000)

}

export function toastError(msg) {
    const toast = document.getElementById("toast")
    toast.innerHTML = `
    <div class="alert alert-error">
          <span class="text-zinc-100">${msg}</span>
    </div>
    `
    toast.style.display = "block"
    toast.style.opacity = '1'
    setTimeout(() => {
        toast.style.opacity = '0'
        setTimeout(() => toast.style.display = "none", 500)
    }, 2000)

}


