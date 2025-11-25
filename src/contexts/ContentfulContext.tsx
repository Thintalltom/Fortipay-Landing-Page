/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { createContext, useContext, useState, useEffect } from 'react'
import { client } from '../Contentful'

interface ContentfulData {
  aboutVisionJson: any[]
  solutionFeatureText: string | null
  solutionFeatureSubtext: string | null
  solutionBannerSubtext: string | null
  powerfulJson: any[]
  solutionBannerText: string | null
  valuePreposition: string | null
  valuePrepositionSubText: string | null
  workText: string | null
  workSubText: string | null
  trustedText: string | null
  trustedSubText: string | null
  pricingText: string | null
  pricingSubText: string | null
  customerText: string | null
  customerSubText: string | null
  footerText: string | null
  homeblogText: string | null
  homeBlogSubText: string | null
  bannerText: string | null
  bannerSubText: string | null
  pricingData: any[]
  protectData: any[]
  homeBlog: any[]
  footerData: any[]
  questionData: any[]
  partnerjson: any[]
  isLoading: boolean
  questionText: string | null
  questionSubText: string | null
  columnJson: any[]
  rowsJson: any[]
  VisionSideJson: any[]
  visionLeftJson: any
  AboutTeamJson: any[]
  blogPoster: any[]
  privacyJson: any[]
  termsJson: any[]
  privacyText: string | null
  policyText: string | null
  policySubText: string | null
  termsText: string | null
  termsSubText: string | null
  footerLinks: any[]
  aboutLinks: any[]
}

const ContentfulContext = createContext<ContentfulData | undefined>(undefined)

const toStringOrNull = (value: any): string | null => {
  return value ? String(value) : null
}

export const ContentfulProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [data, setData] = useState<ContentfulData>({
    visionLeftJson: null,
    aboutVisionJson: [],
    columnJson: [],
    rowsJson: [],
    solutionFeatureText: null,
    solutionFeatureSubtext: null,
    solutionBannerSubtext: null,
    solutionBannerText: null,
    valuePreposition: null,
    valuePrepositionSubText: null,
    workText: null,
    workSubText: null,
    trustedText: null,
    trustedSubText: null,
    pricingText: null,
    pricingSubText: null,
    customerText: null,
    customerSubText: null,
    footerText: null,
    homeblogText: null,
    homeBlogSubText: null,
    bannerText: null,
    bannerSubText: null,
    pricingData: [],
    protectData: [],
    homeBlog: [],
    footerData: [],
    questionData: [],
    partnerjson: [],
    isLoading: true,
    questionText: null,
    questionSubText: null,
    powerfulJson: [],
    VisionSideJson: [],
    AboutTeamJson: [],
    blogPoster: [],
    privacyJson: [],
    termsJson: [],
    privacyText: null,
    policyText: null,
    policySubText: null,
    termsText: null,
    termsSubText: null,
    footerLinks: [],
    aboutLinks: []
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [bannerEntries, solutionEntries, blogPost] = await Promise.all([
          client.getEntries({ content_type: 'bannerHolderText' }),
          client.getEntries({ content_type: 'solutionBanner' }),
          client.getEntries({content_type: "blogPost"})
        ])

        const bannerFields = bannerEntries?.items?.[0]?.fields
        const solutionFields = solutionEntries?.items?.[0]?.fields
        const blogPoster = blogPost?.items
        console.log('the banner fileds', solutionFields)
        setData({
          solutionFeatureText: toStringOrNull(bannerFields?.solutionFeatureText),
          solutionFeatureSubtext: toStringOrNull(bannerFields?.solutionFeatureSubtext),
          solutionBannerSubtext: toStringOrNull(bannerFields?.solutionBannerSubtext),
          solutionBannerText: toStringOrNull(bannerFields?.solutionBanner),
          questionText: toStringOrNull(bannerFields?.questionText),
          questionSubText: toStringOrNull(bannerFields?.questionSubtext),
          bannerText: toStringOrNull(bannerFields?.bannertext),
          bannerSubText: toStringOrNull(bannerFields?.bannerSubText),
          trustedText: toStringOrNull(bannerFields?.trustedSectiontext),
          trustedSubText: toStringOrNull(bannerFields?.trustedSectionSubtext),
          pricingText: toStringOrNull(bannerFields?.pricingText),
          pricingSubText: toStringOrNull(bannerFields?.pricingSubText),
          customerText: toStringOrNull(bannerFields?.customerText),
          customerSubText: toStringOrNull(bannerFields?.customerSubText),
          footerText: toStringOrNull(bannerFields?.footerText),
          homeblogText: toStringOrNull(bannerFields?.homeblogText),
          homeBlogSubText: toStringOrNull(bannerFields?.homeblogSubtext),
          workText: toStringOrNull(bannerFields?.workText),
          workSubText: toStringOrNull(bannerFields?.workSubText),
          valuePreposition: toStringOrNull(bannerFields?.valuePreposition),
          valuePrepositionSubText: toStringOrNull(bannerFields?.valuePrepositionSubtext),
          privacyText: toStringOrNull(bannerFields?.privacyText),
          policySubText: toStringOrNull(bannerFields?.policySubText),
          policyText: toStringOrNull(bannerFields?.policyText),
          termsSubText: toStringOrNull(bannerFields?.termSubText),
          termsText: toStringOrNull(bannerFields?.termsText),
          pricingData: Array.isArray(solutionFields?.pricingData) ? solutionFields.pricingData : [],
           footerLinks: Array.isArray(solutionFields?.footerLinks) ? solutionFields.footerLinks : [],
          protectData: Array.isArray(solutionFields?.protectData) ? solutionFields.protectData : [],
          homeBlog: Array.isArray(solutionFields?.homeBlog) ? solutionFields.homeBlog : [],
          footerData: Array.isArray(solutionFields?.footerData) ? solutionFields.footerData : [],
          questionData: Array.isArray(solutionFields?.questionData) ? solutionFields.questionData : [],
          partnerjson: Array.isArray(solutionFields?.partnerjson) ? solutionFields.partnerjson : [],
          powerfulJson: Array.isArray(solutionFields?.powerfulJson) ? solutionFields.powerfulJson : [],
          columnJson: Array.isArray(solutionFields?.columnJson) ? solutionFields.columnJson : [],
          rowsJson: Array.isArray(solutionFields?.rowsJson) ? solutionFields.rowsJson : [],
          aboutVisionJson: Array.isArray(solutionFields?.aboutVisionJson) ? solutionFields.aboutVisionJson : [],
          VisionSideJson: Array.isArray(solutionFields?.visionSideJson) ? solutionFields.visionSideJson : [],
          privacyJson: Array.isArray(solutionFields?.privacyJson) ? solutionFields.privacyJson : [],
          termsJson: Array.isArray(solutionFields?.termsJson) ? solutionFields.termsJson : [],
          visionLeftJson: solutionFields?.visionleftJson || null,
          AboutTeamJson: Array.isArray(solutionFields?.
            aboutTeamJson
          ) ? solutionFields.
            aboutTeamJson
            : [],
          blogPoster: Array.isArray(blogPoster) ? blogPoster : [],
           aboutLinks: Array.isArray(solutionFields?.aboutJson) ? solutionFields.aboutJson : [],
          isLoading: false
        })
      } catch (error) {
        console.log(error)
        setData(prev => ({ ...prev, isLoading: false }))
      }
    }

    fetchData()
  }, [])

  return (
    <ContentfulContext.Provider value={data}>
      {children}
    </ContentfulContext.Provider>
  )
}

export const useContentful = () => {
  const context = useContext(ContentfulContext)
  if (context === undefined) {
    throw new Error('useContentful must be used within a ContentfulProvider')
  }
  return context
}