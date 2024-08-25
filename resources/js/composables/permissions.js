import { usePage } from "@inertiajs/vue3";

export function usePermission() {
    const hasRole = (name) => usePage().props.auth.user.roles.includes(name);
    const hasPermission = (name) => usePage().props.auth.user.permissions.includes(name);

    

    return { hasRole, hasPermission};
}


// import { usePage } from "@inertiajs/vue3";

// export function usePermission() {
//     const hasRole = (name) => {
//         const user = usePage().props?.auth?.user;
//         if (!user || !user.roles) {
//             console.warn("Roles are not defined for the user");
//             return false;
//         }
//         return user.roles.includes(name);
//     };

//     const hasPermission = (name) => {
//         const user = usePage().props?.auth?.user;
//         if (!user || !user.permissions) {
//             console.warn("Permissions are not defined for the user");
//             return false;
//         }
//         return user.permissions.includes(name);
//     };

//     return { hasRole, hasPermission };
// }
