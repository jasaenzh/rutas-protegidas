const urlRoutes = {
    home: '/',
    login: '/iniciar-sesion',
    register: '/registro',
    account: '/cuenta',
    apartaments: '/apartamentos',
    apartament: (apartamentId) => apartamentId ? `/apartamentos/:${apartamentId}` : '/apartamentos/:apartamentId',
    reservations: '/reservas',
    reservation: (reservationId) => reservationId ? `/reservas/:${reservationId}` : '/reservas/:reservationId',
    newReservation: '/reservas/nueva',
    admin: {
        adminReservations: '/admin/administrar-reservas',
        users: '/admin/usuarios',
    },
}

export default urlRoutes;