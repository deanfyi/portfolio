import type { MDXComponents } from 'mdx/types'
import { ComponentPropsWithoutRef } from 'react'
import { highlight } from 'sugar-high'
import { Spotlight } from '@/components/ui/spotlight'
import { TextEffect } from '@/components/ui/text-effect'
import { TextLoop } from '@/components/ui/text-loop'
import { TextMorph } from '@/components/ui/text-morph'
import { AnimatedBackground } from '@/components/ui/animated-background'
import { Magnetic } from '@/components/ui/magnetic'
import { MorphingDialog, MorphingDialogTrigger, MorphingDialogContainer, MorphingDialogContent, MorphingDialogClose } from '@/components/ui/morphing-dialog'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Cover: ({
      src,
      alt,
      caption,
    }: {
      src: string
      alt: string
      caption: string
    }) => {
      return (
        <figure>
          <img src={src} alt={alt} className="rounded-xl" />
          <figcaption className="text-center">{caption}</figcaption>
        </figure>
      )
    },
    code: ({ children, ...props }: ComponentPropsWithoutRef<'code'>) => {
      const codeHTML = highlight(children as string)
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
    },
    // Interactive Components
    Spotlight: ({ children, ...props }: any) => (
      <Spotlight {...props}>{children}</Spotlight>
    ),
    TextEffect: ({ children, ...props }: any) => (
      <TextEffect {...props}>{children}</TextEffect>
    ),
    TextLoop: ({ children, ...props }: any) => (
      <TextLoop {...props}>{children}</TextLoop>
    ),
    TextMorph: ({ children, ...props }: any) => (
      <TextMorph {...props}>{children}</TextMorph>
    ),
    AnimatedBackground: ({ children, ...props }: any) => (
      <AnimatedBackground {...props}>{children}</AnimatedBackground>
    ),
    Magnetic: ({ children, ...props }: any) => (
      <Magnetic {...props}>{children}</Magnetic>
    ),
    MorphingDialog: ({ children, ...props }: any) => (
      <MorphingDialog {...props}>{children}</MorphingDialog>
    ),
    MorphingDialogTrigger: ({ children, ...props }: any) => (
      <MorphingDialogTrigger {...props}>{children}</MorphingDialogTrigger>
    ),
    MorphingDialogContainer: ({ children, ...props }: any) => (
      <MorphingDialogContainer {...props}>{children}</MorphingDialogContainer>
    ),
    MorphingDialogContent: ({ children, ...props }: any) => (
      <MorphingDialogContent {...props}>{children}</MorphingDialogContent>
    ),
    MorphingDialogClose: ({ children, ...props }: any) => (
      <MorphingDialogClose {...props}>{children}</MorphingDialogClose>
    ),
  }
}
