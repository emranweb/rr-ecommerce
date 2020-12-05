import { createSelector } from 'reselect';


const directorySelector = state=> state.directory;



export const selectDirecotry = createSelector(
    [directorySelector],
    directory=>directory
)