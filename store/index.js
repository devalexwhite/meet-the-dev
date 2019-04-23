export const state = () => ({
    filters: [],
});

export const mutations = {
    setFilters(state, { filters }) {
        filters.forEach(f => state.filters.push({
            name: f,
            checked: true,
        }));
    },
    setChecked(state, { name, checked }) {
        const target = state.filters.find(f => f.name == name);
        target.checked = checked;
    },
};