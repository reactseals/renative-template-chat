const useRouter = (props) => {
    getParams = () => {
        // Reach router
        if (props?.location) {
            return props.location.state;
        } // React Navigation
        else if (props?.route) {
            return props.route.params;
        } // Next Router
        else if (props?.router) {
            return props.router.query;
        } else {
            return {};
        }
    };

    return {
        params: getParams(),
    };
};

export default useRouter;
