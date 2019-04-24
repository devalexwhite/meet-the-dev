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
        if (state.filters.some(f => !f.checked)) {
            const target = state.filters.find(f => f.name == name);
            target.checked = checked;
        } else {
            state.filters.forEach(f => {
                if (f.name !== name) { f.checked = false; }
                else { f.checked = true }
            });
        }
    },
};