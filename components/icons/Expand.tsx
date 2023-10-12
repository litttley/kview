export default function IconExpand({ size = 6 }: { size?: number }) {
  return (
    <svg
      class={`w-${size} h-${size}`}
      version="1.1"
      viewBox="0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
    >
      <g>
        <path d="m464.57 486.4h-181.78c-12.051 0-21.828-9.7734-21.828-21.828 0-12.051 9.7734-21.828 21.828-21.828h159.95v-373.5h-373.5v154.39c0 12.051-9.7734 21.828-21.828 21.828-12.051 0.003906-21.816-9.7695-21.816-21.816v-176.21c0-12.055 9.7734-21.82 21.824-21.82h417.15c12.047 0 21.82 9.7656 21.82 21.82v417.15c0 12.059-9.7734 21.824-21.824 21.824z" />
        <path d="m390.2 143.61v79.879c0 12.059-9.7656 21.828-21.828 21.828s-21.828-9.7656-21.828-21.828v-27.172l-91.164 91.164c-4.2539 4.2539-9.8203 6.3828-15.441 6.3828-5.5664 0-11.133-2.1289-15.387-6.3828-8.5664-8.5078-8.5664-22.371 0-30.879l91.117-91.172h-27.117c-12.059 0-21.828-9.7656-21.828-21.828 0-12.059 9.7656-21.828 21.828-21.828h79.82c12.059 0.007813 21.828 9.7773 21.828 21.836z" />
        <path d="m197.47 486.4h-150.04c-12.051 0-21.824-9.7656-21.824-21.82v-150.04c0-12.051 9.7734-21.828 21.828-21.828h150.04c12.051 0 21.828 9.7734 21.828 21.828v150.04c-0.011719 12.055-9.7812 21.82-21.832 21.82zm-128.22-43.645h106.39v-106.39h-106.39z" />
      </g>
    </svg>
  );
}
