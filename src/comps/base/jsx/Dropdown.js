import tw from 'tailwind-styled-components'

const Drop = tw.div`
group inline-block relative
`

const Link = tw.div`
bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center
`

const Down = tw.div`
absolute hidden text-gray-700 pt-1 group-hover:block
bg-gray-600
w-20
h-10
mt-2
`

export const Dropdown = () => (
	  <Drop>
        <Link>
          <span class="mr-1">Brad</span>
        </Link>

        <Down>
			<h1>Brad</h1>
		</Down>
      </Drop>
);
