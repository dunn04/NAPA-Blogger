const COMMONS = {
  HOME: '/',
  SETTINGS: '/settings'
}

const AUTH = {
  LOGIN: '/login',
  SIGNUP: '/signup',
  LOGOUT: '/logout'
}

const BLOGS = {
  POPULAR_POST: '/popular-blogs',
  MY_BLOGS: {
    ROOT: '/my-blogs',
    DRAFT: '/my-blogs/draft',
    PUBLISHED: '/my-blogs/public',
    EDIT: '/my-blogs/edit/:id',
    SAVED: '/my-blogs/saved'
  },
  CREATE_NEW_BLOG: '/create-new-blog',
  BLOG_DETAIL: {
    BASE: '/blogs/detail',
    WITH_ID: '/blogs/detail/:id'
  },
  BLOG_TAGS: {
    BASE: '/blogs/tags',
    WITH_TAG: '/blogs/tags/:tag'
  }
}

const USER = {
  PROFILE: {
    BASE: '/profile',
    WITH_ID: '/profile/:id'
  }
}

const ROUTE_PATHS = {
  ...COMMONS,
  ...AUTH,
  ...BLOGS,
  ...USER
}

const ROUTE_ACTIONS = {
  BLOG_DETAIL_WITH_ID: (id: string) => `${BLOGS.BLOG_DETAIL.BASE}/${id}`,
  BLOG_WITH_TAG: (tag: string) => `${BLOGS.BLOG_TAGS.BASE}/${tag}`,
  BLOG_EDIT_WITH_ID: (id: string) => `${BLOGS.MY_BLOGS.EDIT.replace(':id', id)}`,
  USER_PROFILE_WITH_ID: (id: string) => `${USER.PROFILE.BASE}/${id}`
}

export { ROUTE_PATHS, ROUTE_ACTIONS }
