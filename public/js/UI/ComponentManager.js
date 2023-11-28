class Component{

    static components= {}

    saveComponent(name, component) {
        Component.components[name] = component;
    }

    static findComponentByName(name) {
        return Component.components[name];
    }

}
export default Component;