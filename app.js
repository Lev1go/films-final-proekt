(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open]"),
        closeModalBtn: document.querySelector("[data-modal-close]"),
        modal: document.querySelector("[data-modal]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open2]"),
        closeModalBtn: document.querySelector("[data-modal-close2]"),
        modal: document.querySelector("[data-modal2]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open3]"),
        closeModalBtn: document.querySelector("[data-modal-close3]"),
        modal: document.querySelector("[data-modal3]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden");
    }
    
    
})();
// glib
(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open-g]"),
        closeModalBtn: document.querySelector("[data-modal-close-g]"),
        modal: document.querySelector("[data-modal-g1]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden-g");
        document.body.classList.toggle("no-scroll-g");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open2-g]"),
        closeModalBtn: document.querySelector("[data-modal-close2-g]"),
        modal: document.querySelector("[data-modal-g2]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden2-g");
        document.body.classList.toggle("no-scroll2-g");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open3-g]"),
        closeModalBtn: document.querySelector("[data-modal-close3-g]"),
        modal: document.querySelector("[data-modal-g3]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden3-g");
        document.body.classList.toggle("no-scroll3-g");
    }
})();

(() => {
    const refs = {
        openModalBtn: document.querySelector("[data-modal-open4-g]"),
        closeModalBtn: document.querySelector("[data-modal-close4-g]"),
        modal: document.querySelector("[data-modal-g4]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
        refs.modal.classList.toggle("is-hidden4-g");
        document.body.classList.toggle("no-scroll4-g");
    }
})();