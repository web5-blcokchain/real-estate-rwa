import type { MenuProps } from 'antd'
import apiMyInfoApi from '@/api/apiMyInfoApi'
import { useUserStore } from '@/stores/user'
import { usePrivy } from '@privy-io/react-auth'
import { useMutation } from '@tanstack/react-query'
import { Link, useLocation, useNavigate } from '@tanstack/react-router'
import { Button, Drawer, Dropdown } from 'antd'

export default function MainHeader() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const showDrawer = () => {
    setOpen(true)
  }

  const onClose = () => {
    setOpen(false)
  }

  return (
    <header className="sticky left-0 top-0 z-10 h-32 fbc bg-background px-8 text-text">
      <div className="fyc gap-8">
        <div className="text-5 text-primary">{t('header.title')}</div>
        <NavMenu className="fyc gap-8 lt-md:hidden" />
      </div>

      <div className="fyc gap-4 lt-lg:hidden">
        <RightMenu />
      </div>

      <div className="hidden lt-lg:flex">
        <div className="i-material-symbols-menu-rounded size-10" onClick={showDrawer}></div>
      </div>

      <Drawer
        className="bg-background! bg-opacity-75! backdrop-blur-md!"
        closeIcon={false}
        width="100%"
        onClose={onClose}
        open={open}
      >
        <div className="space-y-6">
          <div className="fec">
            <div
              className="i-material-symbols-light-close-rounded size-10 bg-white"
              onClick={onClose}
            >
            </div>
          </div>
          <div className="fec gap-4">
            <RightMenu />
          </div>

          <NavMenu
            className={cn(
              'flex flex-col items-end justify-center gap-6',
              'text-6'
            )}
          />
        </div>
      </Drawer>
    </header>
  )
}

function NavMenu({ className }: { className?: string }) {
  const { pathname } = useLocation()
  const { t } = useTranslation()

  const links = [
    { title: `${t('header.home')}`, href: '/home' },
    { title: `${t('header.properties')}`, href: '/properties' },
    { title: `${t('header.investment')}`, href: '/investment' },
    { title: `${t('header.about')}`, href: '/about' },
    { title: `${t('header.aboutMe')}`, href: '/aboutMe' }
  ]

  return (
    <nav className={cn(
      'text-4',
      className
    )}
    >
      {
        links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'cursor-pointer active:text-primary hover:text-primary',
              pathname === link.href ? 'text-text' : 'text-[#8d909a]'
            )}
            to="/about"
          >
            {link.title}
          </Link>
        ))
      }
    </nav>
  )
}

function RightMenu() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [userObj, setUserObj] = useState<Record<string, any>>()
  const setUserData = useUserStore(state => state.setUserData)

  const { ready, authenticated, user, logout } = usePrivy()

  const { mutate } = useMutation({
    mutationFn: async () => {
      const res = await apiMyInfoApi.getUserInfo()
      setUserData(res.data)
      setUserObj(res.data)
      return res.data
    }
  })

  useEffect(() => {
    console.log('user', user)
    if (authenticated) {
      mutate()
    }
  }, [authenticated, user, mutate])

  const login = () => {
    navigate({
      to: '/account/create'
    })
  }

  return (
    <>
      <LanguageSelect />
      <div className="i-material-symbols-help-outline size-5 bg-white"></div>
      <div className="i-material-symbols-notifications-outline size-5 bg-white"></div>
      <div className="i-material-symbols-favorite-outline-rounded size-5 bg-white"></div>

      <Waiting for={ready}>
        {
          authenticated
            ? (
                <div className="fyc gap-1" onClick={logout}>
                  <div className="i-material-symbols-account-circle-outline size-5 bg-white"></div>
                  <div className="text-4 text-white">{userObj?.nickname || ''}</div>
                  <div className="i-ic-round-keyboard-arrow-down size-5 bg-white"></div>
                </div>
              )
            : (
                <div className="space-x-4">
                  <Button
                    className="text-white bg-transparent!"
                    onClick={login}
                  >
                    {t('header.login')}
                  </Button>
                </div>
              )
        }
      </Waiting>
    </>
  )
}

function LanguageSelect() {
  const lang = useUserStore(state => state.language)
  const setLang = useUserStore(state => state.setLanguage)

  useEffect(() => {
    const handleLanguageChange = () => {
      setLang(i18n.language)
    }

    // 监听语言变化事件
    i18n.on('languageChanged', handleLanguageChange)

    // 清理事件监听
    return () => {
      i18n.off('languageChanged', handleLanguageChange)
    }
  }, [setLang])

  const items: MenuProps['items'] = [
    {
      label: (
        <Button
          type="text"
          onClick={() => {
            setLang('zh')
            i18n.changeLanguage('zh')
          }}
        >
          中文
        </Button>
      ),
      key: 'zh'
    },
    {
      label: (
        <Button
          type="text"
          onClick={() => {
            setLang('en')
            i18n.changeLanguage('en')
          }}
        >
          English
        </Button>
      ),
      key: 'en'
    },
    {
      label: (
        <Button
          type="text"
          onClick={() => {
            setLang('jp')
            i18n.changeLanguage('jp')
          }}
        >
          日本語
        </Button>
      ),
      key: 'jp'
    }
  ]

  return (
    <Dropdown menu={{ items }} placement="bottomRight">
      <div className="fyc gap-1">
        <div className="i-majesticons-globe-line size-5 bg-white"></div>
        <div className="w-[50px] cursor-pointer text-4 text-white">
          {lang === 'zh' ? '中文' : lang === 'en' ? 'English' : '日本語'}
        </div>
        <div className="i-ic-round-keyboard-arrow-down size-5 bg-white"></div>
      </div>
    </Dropdown>
  )
}
