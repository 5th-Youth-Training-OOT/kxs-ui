import kSpace from "./space.vue";
kSpace.install =(app:any) => {
    app.component(kSpace.name,kSpace);
};
export default kSpace;