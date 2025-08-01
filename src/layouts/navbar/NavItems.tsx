export type NavItem = {
    label: string;
    link: string;
    children?: NavItem[];
};


export const NavItems: NavItem[] = [
    {
        label: 'MỚI & NỔI BẬT',
        link: '/trending',
        children: [
            {
                label: 'Sản phẩm mới',
                link: '/trending/new-arrivals',
                children: [
                    { label: 'Giày mới', link: '/trending/new-arrivals/shoes' },
                    { label: 'Áo mới', link: '/trending/new-arrivals/shirts' },
                ],
            },
            {
                label: 'Best Seller',
                link: '/trending/best-seller',
                children: [
                    { label: 'Nam bán chạy', link: '/trending/best-seller/male' },
                    { label: 'Nữ bán chạy', link: '/trending/best-seller/female' },
                ],
            },
            {
                label: 'Hot Trend',
                link: '/trending/hot-trend',
                children: [
                    { label: 'Xu hướng giày', link: '/trending/hot-trend/shoes' },
                    { label: 'Phong cách mới', link: '/trending/hot-trend/style' },
                ],
            },
        ],
    },
    {
        label: 'NAM',
        link: '/male',
        children: [
            {
                label: 'Giày nam',
                link: '/male/shoes',
                children: [
                    { label: 'Chạy bộ', link: '/male/shoes/running' },
                    { label: 'Tập luyện', link: '/male/shoes/training' },
                    { label: 'Bóng rổ', link: '/male/shoes/basketball' },
                ],
            },
            {
                label: 'Áo nam',
                link: '/male/shirts',
                children: [
                    { label: 'Thể thao', link: '/male/shirts/sports' },
                    { label: 'Công sở', link: '/male/shirts/office' },
                    { label: 'Hoodie', link: '/male/shirts/hoodie' },
                ],
            },
            {
                label: 'Phụ kiện nam',
                link: '/male/accessories',
                children: [
                    { label: 'Mũ', link: '/male/accessories/hats' },
                    { label: 'Tất', link: '/male/accessories/socks' },
                    { label: 'Balo', link: '/male/accessories/backpacks' },
                ],
            },
        ],
    },
    {
        label: 'NỮ',
        link: '/female',
        children: [
            {
                label: 'Giày nữ',
                link: '/female/shoes',
                children: [
                    { label: 'Chạy bộ', link: '/female/shoes/running' },
                    { label: 'Thời trang', link: '/female/shoes/fashion' },
                    { label: 'Sandal', link: '/female/shoes/sandal' },
                ],
            },
            {
                label: 'Áo nữ',
                link: '/female/shirts',
                children: [
                    { label: 'Thể thao', link: '/female/shirts/sports' },
                    { label: 'Áo blouse', link: '/female/shirts/blouse' },
                    { label: 'Áo len', link: '/female/shirts/sweater' },
                ],
            },
            {
                label: 'Phụ kiện nữ',
                link: '/female/accessories',
                children: [
                    { label: 'Mũ', link: '/female/accessories/hats' },
                    { label: 'Túi đeo chéo', link: '/female/accessories/crossbags' },
                    { label: 'Tất', link: '/female/accessories/socks' },
                ],
            },
        ],
    },
    {
        label: 'TRẺ EM',
        link: '/children',
        children: [
            {
                label: 'Giày trẻ em',
                link: '/children/shoes',
                children: [
                    { label: 'Giày bé trai', link: '/children/shoes/boys' },
                    { label: 'Giày bé gái', link: '/children/shoes/girls' },
                ],
            },
            {
                label: 'Áo trẻ em',
                link: '/children/shirts',
                children: [
                    { label: 'Áo thun', link: '/children/shirts/tshirts' },
                    { label: 'Áo khoác', link: '/children/shirts/jackets' },
                ],
            },
            {
                label: 'Phụ kiện trẻ em',
                link: '/children/accessories',
                children: [
                    { label: 'Mũ', link: '/children/accessories/hats' },
                    { label: 'Balo mini', link: '/children/accessories/backpacks' },
                    { label: 'Tất', link: '/children/accessories/socks' },
                ],
            },
        ],
    },
    {
        label: 'SALE',
        link: '/sale',
        children: [
            {
                label: 'Giảm giá theo danh mục',
                link: '/sale/categories',
                children: [
                    { label: 'Giày đang giảm', link: '/sale/shoes' },
                    { label: 'Áo đang giảm', link: '/sale/shirts' },
                ],
            },
            {
                label: 'Giảm sâu',
                link: '/sale/deep',
                children: [
                    { label: 'Dưới 500K', link: '/sale/under-500' },
                    { label: 'Mua 1 tặng 1', link: '/sale/buy-1-get-1' },
                ],
            },
        ],
    },
];