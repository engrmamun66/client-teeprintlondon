const CommonMethods = {
    
}

export { CommonMethods };

export default function () {
    return useState('common', () => ({
        DOM_LOADED: false,
        messages: [],
        headerActions: false,
        zoom: 16,
        queryData :{
            company_id: null,
            site_id: null,
            guard: null,
        },
        isDragging: false, //guards/assign-to-clusters
        tempGuard: null,
        center: null,
        cluserZoom: 3,
        showCheckpoints: false,
        expand_clusters: false,
        default_cluster_color: '#000000',
        clickedFirstRow: false,
    }))
}

