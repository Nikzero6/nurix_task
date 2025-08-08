export const cn = (...args: (string | undefined | null)[]) => {
  return args.filter(Boolean).join(" ");
};
