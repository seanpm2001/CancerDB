{


class abstractTrueBaseColumnParser extends GrammarBackedNode {
      get columnNameCell() {
      return this.getWord(0)
    }
get isColumn() { return true }
get typeForCsvDocs() { return `unspecified` }
get columnValue() {
 return this.content
}
get columnName() {
 return this.definition.cruxPathAsColumnName
}
    }

class abstractUrlColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get urlCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `url` }
    }

class amazonParser extends abstractUrlColumnParser {
      
    }

class cancerDotGovParser extends abstractUrlColumnParser {
      get sourceDomain() { return `cancer.gov` }
    }

class cancerDotOrgParser extends abstractUrlColumnParser {
      get sourceDomain() { return `cancer.org` }
    }

class abstractCharityRegistryParser extends abstractUrlColumnParser {
      
    }

class englandAndWalesCharityDetailsParser extends abstractCharityRegistryParser {
      get sourceDomain() { return `register-of-charities.charitycommission.gov.uk` }
    }

class charityNavigatorParser extends abstractCharityRegistryParser {
      get sourceDomain() { return `charitynavigator.org` }
    }

class guideStarParser extends abstractCharityRegistryParser {
      get sourceDomain() { return `guidestar.org` }
    }

class greatNonProfitsParser extends abstractCharityRegistryParser {
      get sourceDomain() { return `greatnonprofits.org` }
    }

class investorRelationsPageParser extends abstractUrlColumnParser {
      
    }

class abstractStockExchangeParser extends abstractUrlColumnParser {
      
    }

class nyseParser extends abstractStockExchangeParser {
      get sourceDomain() { return `nyse.com` }
    }

class nasdaqParser extends abstractStockExchangeParser {
      get sourceDomain() { return `nasdaq.com` }
    }

class courseraParser extends abstractUrlColumnParser {
      get sourceDomain() { return `coursera.com` }
    }

class abstractSocialMediaParser extends abstractUrlColumnParser {
      get sortKey() { return `abstractSocialMediaParser` }
    }

class facebookParser extends abstractSocialMediaParser {
      createParserCombinator() {class followersParser extends abstractFollowersParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"followers" : followersParser}), undefined)
  }
get sourceDomain() { return `facebook.com` }
    }

class gabParser extends abstractSocialMediaParser {
      createParserCombinator() {class followersParser extends abstractFollowersParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"followers" : followersParser}), undefined)
  }
get sourceDomain() { return `gab.com` }
    }

class instagramParser extends abstractSocialMediaParser {
      createParserCombinator() {class followersParser extends abstractFollowersParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"followers" : followersParser}), undefined)
  }
get sourceDomain() { return `instagram.com` }
    }

class linkedinParser extends abstractSocialMediaParser {
      createParserCombinator() {class followersParser extends abstractFollowersParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"followers" : followersParser}), undefined)
  }
get sourceDomain() { return `linkedin.com` }
    }

class pinterestParser extends abstractSocialMediaParser {
      createParserCombinator() {class followersParser extends abstractFollowersParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"followers" : followersParser}), undefined)
  }
get sourceDomain() { return `pinterest.com` }
    }

class rumbleParser extends abstractSocialMediaParser {
      createParserCombinator() {class followersParser extends abstractFollowersParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"followers" : followersParser}), undefined)
  }
get sourceDomain() { return `rumble.com` }
    }

class telegramParser extends abstractSocialMediaParser {
      createParserCombinator() {class followersParser extends abstractFollowersParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"followers" : followersParser}), undefined)
  }
get sourceDomain() { return `t.me` }
    }

class twitterParser extends abstractSocialMediaParser {
      createParserCombinator() {class followersParser extends abstractFollowersParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"followers" : followersParser}), undefined)
  }
get sourceDomain() { return `twitter.com` }
    }

class vimeoParser extends abstractSocialMediaParser {
      createParserCombinator() {class followersParser extends abstractFollowersParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"followers" : followersParser}), undefined)
  }
get sourceDomain() { return `vimeo.com` }
    }

class youTubeChannelParser extends abstractSocialMediaParser {
      createParserCombinator() {class followersParser extends abstractFollowersParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"followers" : followersParser}), undefined)
  }
get sourceDomain() { return `youtube.com` }
    }

class gcoParser extends abstractUrlColumnParser {
      get sourceDomain() { return `gco.iarc.fr` }
    }

class githubParser extends abstractUrlColumnParser {
      get sourceDomain() { return `github.com` }
    }

class githubRepoParser extends abstractUrlColumnParser {
      get sourceDomain() { return `github.com` }
    }

class nciLinkParser extends abstractUrlColumnParser {
      get sourceDomain() { return `cancer.gov` }
    }

class nciImageParser extends abstractUrlColumnParser {
      get sourceDomain() { return `cancer.gov` }
    }

class pdfParser extends abstractUrlColumnParser {
      
    }

class subredditParser extends abstractUrlColumnParser {
      createParserCombinator() {class membersParser extends abstractAnnualPopulationCountMapParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"members" : membersParser}), undefined)
  }
get sourceDomain() { return `reddit.com` }
    }

class referenceParser extends abstractUrlColumnParser {
      
    }

class websiteParser extends abstractUrlColumnParser {
      
    }

class eventsPageParser extends abstractUrlColumnParser {
      
    }

class wikipediaParser extends abstractUrlColumnParser {
      get sourceDomain() { return `wikipedia.org` }
    }

class wolframAlphaParser extends abstractUrlColumnParser {
      get sourceDomain() { return `wolframalpha.com` }
    }

class abstractUrlGuidColumnParser extends abstractUrlColumnParser {
      
    }

class youTubeParser extends abstractUrlColumnParser {
      get sourceDomain() { return `youtube.com` }
    }

class abstractHashMapColumnParser extends abstractTrueBaseColumnParser {
      get typeForCsvDocs() { return `multilineStringMap` }
get columnValue() {
 return this.childrenToString()
}
    }

class abstractAnnualPopulationCountMapParser extends abstractHashMapColumnParser {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(annualPopulationCountParser, undefined, undefined)
  }
    }

class annualDeathsReportParser extends abstractAnnualPopulationCountMapParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get countryCodeCell() {
      return this.getWord(1)
    }
get urlCell() {
      return this.getWord(2)
    }
    }

class membersParser extends abstractAnnualPopulationCountMapParser {
      
    }

class abstractEnumColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get enumCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `enum` }
    }

class cancerTypesParser extends abstractEnumColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get cancerTypeCell() {
      return this.getWord(1)
    }
get cancerTypeCell() {
      return this.getWordsFrom(2)
    }
    }

class routesOfAdministrationParser extends abstractEnumColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get routesOfAdministrationCell() {
      return this.getWord(1)
    }
get routesOfAdministrationCell() {
      return this.getWordsFrom(2)
    }
    }

class publicationFrequencyParser extends abstractEnumColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get publicationFrequencyCell() {
      return this.getWord(1)
    }
    }

class typeParser extends abstractEnumColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get typeCell() {
      return this.getWord(1)
    }
get typeCell() {
      return this.getWordsFrom(2)
    }
    }

class abstractWordColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get wordCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `word` }
    }

class abstractChemicalGuidParser extends abstractWordColumnParser {
      
    }

class drugBankParser extends abstractChemicalGuidParser {
      get sourceDomain() { return `drugbank.com` }
    }

class keggParser extends abstractChemicalGuidParser {
      get sourceDomain() { return `genome.jp` }
    }

class medlinePlusParser extends abstractChemicalGuidParser {
      get sourceDomain() { return `medlineplus.gov` }
    }

class pubChemParser extends abstractChemicalGuidParser {
      get sourceDomain() { return `pubchem.ncbi.nlm.nih.gov` }
    }

class einParser extends abstractWordColumnParser {
      
    }

class nciCodeParser extends abstractWordColumnParser {
      get sourceDomain() { return `ncithesaurus.nci.nih.gov` }
    }

class oncoTreeIdParser extends abstractWordColumnParser {
      get sourceDomain() { return `oncotree.mskcc.org` }
    }

class parentOncoTreeIdParser extends abstractWordColumnParser {
      get sourceDomain() { return `oncotree.mskcc.org` }
    }

class umlsParser extends abstractWordColumnParser {
      get sourceDomain() { return `www.nlm.nih.gov` }
    }

class domainNameParser extends abstractWordColumnParser {
      createParserCombinator() {class registeredParser extends abstractYearColumnParser {
      
    }
  return new TreeNode.ParserCombinator(undefined, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"registered" : registeredParser}), undefined)
  }
    }

class abstractStringColumnParser extends abstractTrueBaseColumnParser {
      get stringCell() {
      return this.getWordsFrom(0)
    }
get typeForCsvDocs() { return `string` }
    }

class companyParser extends abstractStringColumnParser {
      
    }

class idParser extends abstractStringColumnParser {
      get suggestInAutocomplete() { return false }
get isComputed() { return true }
    }

class descriptionParser extends abstractStringColumnParser {
      
    }

class nextDateParser extends abstractStringColumnParser {
      
    }

class originCommunityParser extends abstractStringColumnParser {
      
    }

class countryParser extends abstractStringColumnParser {
      get countryNameCell() {
      return this.getWordsFrom(0)
    }
    }

class cityParser extends abstractStringColumnParser {
      get cityStateCell() {
      return this.getWordsFrom(0)
    }
    }

class titleParser extends abstractStringColumnParser {
      
    }

class standsForParser extends abstractStringColumnParser {
      
    }

class akaParser extends abstractStringColumnParser {
      
    }

class oldNameParser extends abstractStringColumnParser {
      
    }

class tradenamesParser extends abstractStringColumnParser {
      
    }

class nciDesignationParser extends abstractStringColumnParser {
      get sourceDomain() { return `cancer.gov` }
    }

class hostSchoolParser extends abstractStringColumnParser {
      get sourceDomain() { return `cancer.gov` }
    }

class mainTypeParser extends abstractStringColumnParser {
      get sourceDomain() { return `oncotree.mskcc.org` }
    }

class tissueParser extends abstractStringColumnParser {
      get sourceDomain() { return `oncotree.mskcc.org` }
    }

class phoneNumberParser extends abstractStringColumnParser {
      
    }

class journalParser extends abstractStringColumnParser {
      
    }

class authorParser extends abstractStringColumnParser {
      
    }

class abstractStringListColumnParser extends abstractStringColumnParser {
      get typeForCsvDocs() { return `string[]` }
    }

class abstractTrueBaseLinksColumnParser extends abstractStringListColumnParser {
      get trueBaseIdCell() {
      return this.getWordsFrom(0)
    }
get typeForCsvDocs() { return `trueBaseId[]` }
get trueBaseIds() {
 return this.getWordsFrom(1)
}
updateTruebaseIds(oldTrueBaseId, newTrueBaseId) {
 this.setContent(
  this.getWordsFrom(1)
   .map((word) => (word === oldTrueBaseId ? newTrueBaseId : word))
   .join(" ")
 )
}
    }

class abstractRelationshipParser extends abstractTrueBaseLinksColumnParser {
      
    }

class relatedParser extends abstractRelationshipParser {
      
    }

class parentOrganizationParser extends abstractRelationshipParser {
      
    }

class uscsIdParser extends abstractStringColumnParser {
      get sourceDomain() { return `cdc.gov` }
    }

class abstractNumericColumnParser extends abstractTrueBaseColumnParser {
      get typeForCsvDocs() { return `number` }
    }

class abstractIntColumnParser extends abstractNumericColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get intCell() {
      return parseInt(this.getWord(1))
    }
get typeForCsvDocs() { return `integer` }
    }

class abstractComputedSumColumnParser extends abstractIntColumnParser {
      get suggestInAutocomplete() { return false }
get isComputed() { return true }
    }

class lengthParser extends abstractComputedSumColumnParser {
      get suggestInAutocomplete() { return false }
    }

class abstractYearColumnParser extends abstractIntColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get yearCell() {
      return parseFloat(this.getWord(1))
    }
    }

class appearedParser extends abstractYearColumnParser {
      
    }

class closedParser extends abstractYearColumnParser {
      
    }

class oncoTreeLevelParser extends abstractIntColumnParser {
      get sourceDomain() { return `oncotree.mskcc.org` }
    }

class subTypesParser extends abstractIntColumnParser {
      get sourceDomain() { return `oncotree.mskcc.org` }
    }

class abstractFollowersParser extends abstractIntColumnParser {
      
    }

class usNewsRankParser extends abstractIntColumnParser {
      get sourceDomain() { return `usnews.com` }
    }

class uscsDeathsPerYearParser extends abstractIntColumnParser {
      
    }

class uscsCasesPerYearParser extends abstractIntColumnParser {
      
    }

class abstractCountColumnParser extends abstractIntColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get countCell() {
      return parseFloat(this.getWord(1))
    }
    }

class abstractPopulationCountColumnParser extends abstractCountColumnParser {
      
    }

class abstractComputedEstimateColumnParser extends abstractCountColumnParser {
      get suggestInAutocomplete() { return false }
get isComputed() { return true }
    }

class abstractComputedRankColumnParser extends abstractIntColumnParser {
      get suggestInAutocomplete() { return false }
get isComputed() { return true }
    }

class abstractPercentageColumnParser extends abstractNumericColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get percentCell() {
      return this.getWord(1)
    }
    }

class uscsMortalityRateParser extends abstractPercentageColumnParser {
      
    }

class abstractFloatColumnParser extends abstractNumericColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get floatCell() {
      return parseFloat(this.getWord(1))
    }
    }

class abstractBooleanColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get boolCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `boolean` }
    }

class isOpenSourceParser extends abstractBooleanColumnParser {
      
    }

class isPublicDomainParser extends abstractBooleanColumnParser {
      
    }

class abstractStringBlobColumnParser extends abstractTrueBaseColumnParser {
      createParserCombinator() { return new TreeNode.ParserCombinator(this._getBlobParserCatchAllParser())}
getErrors() { return [] }
get typeForCsvDocs() { return `multilineString` }
get columnValue() {
 return this.childrenToString()
}
    }

class abstractDelimitedValuesBlobColumnParser extends abstractStringBlobColumnParser {
      createParserCombinator() { return new TreeNode.ParserCombinator(this._getBlobParserCatchAllParser())}
getErrors() { return [] }
    }

class uscsTableParser extends abstractDelimitedValuesBlobColumnParser {
      createParserCombinator() { return new TreeNode.ParserCombinator(this._getBlobParserCatchAllParser())}
getErrors() { return [] }
get columnNameCell() {
      return this.getWord(0)
    }
get yearCell() {
      return parseFloat(this.getWord(1))
    }
get sourceDomain() { return `cdc.gov` }
    }

class abstractCodeColumnParser extends abstractStringBlobColumnParser {
      createParserCombinator() { return new TreeNode.ParserCombinator(this._getBlobParserCatchAllParser())}
getErrors() { return [] }
    }

class abstractOneWordGuidColumnParser extends abstractTrueBaseColumnParser {
      get columnNameCell() {
      return this.getWord(0)
    }
get externalGuidCell() {
      return this.getWord(1)
    }
get typeForCsvDocs() { return `guid` }
    }

class abstractMultiwordGuidColumnParser extends abstractTrueBaseColumnParser {
      get externalGuidCell() {
      return this.getWordsFrom(0)
    }
get typeForCsvDocs() { return `guid` }
    }

class cancerdbParser extends GrammarBackedNode {
      createParserCombinator() {
  return new TreeNode.ParserCombinator(trueBaseErrorParser, Object.assign(Object.assign({}, super.createParserCombinator()._getFirstWordMapAsObject()), {"amazon" : amazonParser,
"cancerDotGov" : cancerDotGovParser,
"cancerDotOrg" : cancerDotOrgParser,
"englandAndWalesCharityDetails" : englandAndWalesCharityDetailsParser,
"charityNavigator" : charityNavigatorParser,
"guideStar" : guideStarParser,
"greatNonProfits" : greatNonProfitsParser,
"investorRelationsPage" : investorRelationsPageParser,
"nyse" : nyseParser,
"nasdaq" : nasdaqParser,
"coursera" : courseraParser,
"facebook" : facebookParser,
"gab" : gabParser,
"instagram" : instagramParser,
"linkedin" : linkedinParser,
"pinterest" : pinterestParser,
"rumble" : rumbleParser,
"telegram" : telegramParser,
"twitter" : twitterParser,
"vimeo" : vimeoParser,
"youTubeChannel" : youTubeChannelParser,
"gco" : gcoParser,
"github" : githubParser,
"githubRepo" : githubRepoParser,
"nciLink" : nciLinkParser,
"nciImage" : nciImageParser,
"pdf" : pdfParser,
"subreddit" : subredditParser,
"reference" : referenceParser,
"website" : websiteParser,
"eventsPage" : eventsPageParser,
"wikipedia" : wikipediaParser,
"wolframAlpha" : wolframAlphaParser,
"youTube" : youTubeParser,
"annualDeathsReport" : annualDeathsReportParser,
"members" : membersParser,
"cancerTypes" : cancerTypesParser,
"routesOfAdministration" : routesOfAdministrationParser,
"publicationFrequency" : publicationFrequencyParser,
"type" : typeParser,
"drugBank" : drugBankParser,
"kegg" : keggParser,
"medlinePlus" : medlinePlusParser,
"pubChem" : pubChemParser,
"ein" : einParser,
"nciCode" : nciCodeParser,
"oncoTreeId" : oncoTreeIdParser,
"parentOncoTreeId" : parentOncoTreeIdParser,
"umls" : umlsParser,
"domainName" : domainNameParser,
"company" : companyParser,
"id" : idParser,
"description" : descriptionParser,
"nextDate" : nextDateParser,
"originCommunity" : originCommunityParser,
"country" : countryParser,
"city" : cityParser,
"title" : titleParser,
"standsFor" : standsForParser,
"aka" : akaParser,
"oldName" : oldNameParser,
"tradenames" : tradenamesParser,
"nciDesignation" : nciDesignationParser,
"hostSchool" : hostSchoolParser,
"mainType" : mainTypeParser,
"tissue" : tissueParser,
"phoneNumber" : phoneNumberParser,
"journal" : journalParser,
"author" : authorParser,
"related" : relatedParser,
"parentOrganization" : parentOrganizationParser,
"uscsId" : uscsIdParser,
"length" : lengthParser,
"appeared" : appearedParser,
"closed" : closedParser,
"oncoTreeLevel" : oncoTreeLevelParser,
"subTypes" : subTypesParser,
"usNewsRank" : usNewsRankParser,
"uscsDeathsPerYear" : uscsDeathsPerYearParser,
"uscsCasesPerYear" : uscsCasesPerYearParser,
"uscsMortalityRate" : uscsMortalityRateParser,
"isOpenSource" : isOpenSourceParser,
"isPublicDomain" : isPublicDomainParser,
"uscsTable" : uscsTableParser}), [{regex: /^$/, parser: blankLineParser}])
  }
get fileExtension() { return `cdb` }
static cachedHandGrammarProgramRoot = new HandGrammarProgram(`// todo Add enum for: Comprehensive Cancer Center && Basic Laboratory Cancer Center && Cancer Center
// todo trim the trailing slash
// WorldWideColumns is an experimental attempt to define reusuable base abstract column types for TrueBases.
// Version 2.0.0
// Cell Parsers
// Enum Parsers
// Numeric cell parsers
// Common numeric cell extensions
// String Cell Parsers
// Line Parsers
// The main line parser. Anything extending this will be included in the CSV dumps.
// Common string parsers
// Common blob parsers
// Links between TrueBase files
// Boolean column node
// Commmon numeric parsers
// Common time parsers
// Common miscellaneous parsers
// URL Parsers
// GUID Parsers
// Hashmap parsers
// Common population columns
// Common computed types




















cancerTypeCell
 enum breast prostate cervical colon lung skin bladder kidney lymphoma multiplemyeloma ovarian thyroid endometrial neuroendocrine liver leukemia oral
 highlightScope constant.language
routesOfAdministrationCell
 enum oral topical intravenous subcutaneousInjection intramuscularInjection intravesical
countryCodeCell
 extends stringCell
countryNameCell
 extends stringCell
cityStateCell
 extends stringCell
publicationFrequencyCell
 enum daily weekly biweekly monthly quarterly semiannually annually
typeCell
 enum cancerType book company publicCompany drug chemotherapyDrug journal nationalCancerInstitute intergovernmentalCancerOrganization nationalGovernmentAgency stateGovernmentOrganization researchCenter paper anthracycline alkylatingAgent taxane researchHospital nciCancerCenter registry website cancerNonProfit nonProfit breathTreatment exercise mentalTreatment vitamin touchTreatment surgery organTransplant documentary lifestyle diet hospital childrensHospital professionalOrganization app caregiverService software lotion device clothing prosthetic subreddit toxinAvoidance hospiceCareService immunotherapy ctScan ultrasound imagingProcedure herbal diagnosticTest onlineForum majorResearchEffort onlineDatabase organizationDivision internationalOrganization consortium governmentFundedNonProfit awarenessEvent recurringEvent routeOfAdministration magazine procedure onlineCourse ontology microscope ablationProcedure tyrosineKinaseInhibitor radiationTherapy chemotherapyProcedure treatmentCenter
 highlightScope constant.language
blankCell
anyCell
enumCell
boolCell
 extends enumCell
 enum true false
numberCell
intCell
 extends numberCell
 highlightScope constant.numeric.integer
floatCell
 extends numberCell
 highlightScope constant.numeric.float
percentCell
 highlightScope constant.numeric.integer
 regex \\d+%
countCell
 extends intCell
populationCountCell
 description A count of people.
 extends countCell
yearCell
 extends intCell
stringCell
 highlightScope string
wordCell
 extends stringCell
 description Any string except for a blank cell.
 regex .+
columnNameCell
 highlightScope keyword
 regex [a-zA-Z0-9]+
trueBaseIdCell
 description A global identifier for this entity in a TrueBase. Currently a very restricted character set to ensure compatibility between a wide variety of URLs and filesystems.
 regex [a-z0-9\\-\\.]+
 highlightScope string
 enum 3d-crt a-lucky-man-a-memoir a-new-war-on-cancer-book aaccr-et aaci aacr aad abbott abbvie abramson-cancer-center abraxane acd-au acinar-cell-carcinoma-nos acinar-cell-carcinoma-of-the-pancreas acinic-cell-carcinoma acral-melanoma acs-can acs-cancer-programs acs actcr-au actinomycin activated-b-cell-type acupressure acupuncture acute-basophilic-leukemia acute-leukemias-of-ambiguous-lineage acute-megakaryoblastic-leukemia acute-monoblastic-monocytic-leukemia acute-myeloid-leukemia acute-myelomonocytic-leukemia acute-panmyelosis-with-myelofibrosis acute-undifferentiated-leukemia adamantinoma adenocarcinoma-in-situ adenocarcinoma-nos adenocarcinoma-of-the-gastroesophageal-junction adenoid-cystic-breast-cancer adenoid-cystic-carcinoma-of-the-lung adenoid-cystic-carcinoma adenomyoepithelioma-of-the-breast adenosquamous-carcinoma-of-the-gallbladder adenosquamous-carcinoma-of-the-pancreas adenosquamous-carcinoma-of-the-stomach adenosquamous-carcinoma-of-the-tongue adrenal-gland adrenalectomy adrenocortical-adenoma adrenocortical-carcinoma adult-t-cell-leukemia-lymphoma advent-health-orlando aecc aggressive-angiomyxoma aggressive-digital-papillary-adenocarcinoma aggressive-nk-cell-leukemia aggressive-systemic-mastocytosis aicr albert-b-chandler-hospital alitretinoin alk-positive-large-b-cell-lymphoma alkaline-diet all alpha-heavy-chain-disease altretamine alveolar-rhabdomyosarcoma alveolar-soft-part-sarcoma alvin-j-siteman-cancer-center american-cancer-society american-liver-foundation american-lung-association amgen aml-megakaryoblastic-with-t122p13.3q13.3rbm15-mkl1 aml-nos aml-with-bcr-abl1 aml-with-biallelic-mutations-of-cebpa aml-with-inv16p13.1q22-or-t1616p13.1q22cbfb-myh11 aml-with-inv3q21.3q26.2-or-t33q21.3q26.2-gata2-mecom aml-with-maturation aml-with-minimal-differentiation aml-with-mutated-npm1 aml-with-mutated-runx1 aml-with-myelodysplasia-related-changes aml-with-recurrent-genetic-abnormalities aml-with-t69p23q34.1dek-nup214 aml-with-t821q22q22.1runx1-runx1t1 aml-with-t911p21.3q23.3mllt3-kmt2a aml-without-maturation ampulla-of-vater ampullary-carcinoma amyloidosis anal-gland-adenocarcinoma anal-squamous-cell-carcinoma anaplastic-astrocytoma anaplastic-ependymoma anaplastic-ganglioglioma anaplastic-large-cell-lymphoma-alk-negative anaplastic-large-cell-lymphoma-alk-positive anaplastic-large-cell-lymphoma anaplastic-meningioma anaplastic-oligoastrocytoma anaplastic-oligodendroglioma anaplastic-pleomorphic-xanthoastrocytoma anaplastic-thyroid-cancer angiocentric-glioma angioimmunoblastic-t-cell-lymphoma angiomatoid-fibrous-histiocytoma angiosarcoma annals-of-oncology anorectal-mucosal-melanoma anticancer apl-with-pml-rara appendiceal-adenocarcinoma argentina-ncc arizona-cancer-center aromatherapy arpha-h asco astrazeneca astroblastoma astrocytoma atezolizumab atypical-choroid-plexus-papilloma atypical-chronic-myeloid-leukemia-bcr-abl1- atypical-fibroxanthoma atypical-lung-carcinoid atypical-meningioma atypical-nevus atypical-pituitary-adenoma atypical-teratoid-rhabdoid-tumor azacitidine azathioprine b-cell-lymphoma-unclassifiable-with-features-intermediate-between-dlbcl-and-classical-hodgkin-lymphoma b-cell-prolymphocytic-leukemia b-lymphoblastic-leukemia-lymphoma-bcr-abl1-like b-lymphoblastic-leukemia-lymphoma-nos b-lymphoblastic-leukemia-lymphoma-with-hyperdiploidy b-lymphoblastic-leukemia-lymphoma-with-hypodiploidy b-lymphoblastic-leukemia-lymphoma-with-iamp21 b-lymphoblastic-leukemia-lymphoma-with-recurrent-genetic-abnormalities b-lymphoblastic-leukemia-lymphoma-with-t119q23p13.3tcf3-pbx1 b-lymphoblastic-leukemia-lymphoma-with-t1221p13.2q22.1-etv6-runx1 b-lymphoblastic-leukemia-lymphoma-with-t514q31.1q32.3-il3-igh b-lymphoblastic-leukemia-lymphoma-with-t922q34.1q11.2bcr-abl1 b-lymphoblastic-leukemia-lymphoma-with-tv11q23.3kmt2a-rearranged b-lymphoblastic-leukemia-lymphoma basal-cell-carcinoma basaloid-large-cell-carcinoma-of-the-lung basaloid-penile-squamous-cell-carcinoma baxter bayer bbcr-ar bccr-bn bcrisktool becton-dickinson-and-company beigene being-mortal-medicine-and-what-matters-in-the-end belotecan bendamustine benign-phyllodes-tumor-of-the-breast beth-israel betrayed-by-nature-the-war-on-cancer bevacizumab bexarotene biliary-tract biogen biontech bladder-adenocarcinoma bladder-cancer-subreddit bladder-cancer bladder-squamous-cell-carcinoma bladder-urothelial-carcinoma blastic-plasmacytoid-dendritic-cell-neoplasm bleomycin bncr-bt boehringer-ingelheim bone-marrow-and-cancer-foundation bone borderline-phyllodes-tumor-of-the-breast bortezomib brachytherapy brain breast-angiosarcoma breast-book breast-cancer-awareness-month breast-cancer-subreddit breast-carcinoma-with-signet-ring breast-ductal-carcinoma-in-situ breast-fibroepithelial-neoplasms breast-implant-associated-anaplastic-large-cell-lymphoma breast-invasive-cancer-nos breast-invasive-carcinoma-nos breast-invasive-carcinosarcoma-nos breast-invasive-ductal-carcinoma breast-invasive-lobular-carcinoma breast-invasive-mixed-mucinous-carcinoma breast-lobular-carcinoma-in-situ breast-mixed-ductal-and-lobular-carcinoma breast-neoplasm-nos breast-prostheses breast-sarcoma breast breastcancer-dot-org brenner-tumor-benign brenner-tumor-borderline brenner-tumor-malignant brenner-tumor bristol-myers-squibb burkitt-like-lymphoma-with-11q-aberration burkitt-lymphoma busulfan cabazitaxel cabozantinib camptothecin canada-ccm canada-ohcc canadian-cancer-society canadian-partnership-against-cancer cancer-australia cancer-cell-journal cancer-council-australia cancer-crackdown cancer-cured-victory-over-the-war-on-cancer-book cancer-discovery cancer-dot-net cancer-is-not-a-disease-book cancer-journal cancer-of-unknown-primary-nos cancer-of-unknown-primary cancer-research-journal cancer-research-uk cancer-risk-calculator cancer-society-of-finland cancer-statistics-center cancer-subreddit cancer-support-community cancer-the-emperor-of-all-maladies cancer-today cancer-ward cancerbuddy cancercare cancerdb cancerfonden canswer capecitabine carboplatin carboquone carcinoma-with-chondroid-metaplasia carcinoma-with-osseous-metaplasia carmustine case-comprehensive-cancer-center cbioportal ccan ccdi-annual-symposium ccdi ccr-ar ccrcal ccrisktool ccrn-ng cdc-division-of-cancer-prevention-and-control cdc cedars-sinai cellular-schwannoma center-for-molecular-oncology central-neurocytoma cerebellar-liponeurocytoma cervical-adenocarcinoma-in-situ cervical-adenocarcinoma cervical-adenoid-basal-carcinoma cervical-adenoid-cystic-carcinoma cervical-adenosquamous-carcinoma cervical-cancer-subreddit cervical-clear-cell-carcinoma cervical-endometrioid-carcinoma cervical-leiomyosarcoma cervical-neuroendocrine-tumor cervical-rhabdomyosarcoma cervical-serous-carcinoma cervical-squamous-cell-carcinoma cervix chao-family-comprehensive-cancer-center chaos-and-cancers-theories-concerning-carcinogene chlorambucil chlormethine chlorozotocin cholangiocarcinoma chondroblastic-osteosarcoma chondroblastoma chondrosarcoma chordoid-glioma-of-the-third-ventricle chordoid-meningioma chordoma choriocarcinoma-testis choriocarcinoma-uterus choriocarcinoma choroid-plexus-carcinoma choroid-plexus-papilloma choroid-plexus-tumor chris-beat-cancer chromophobe-renal-cell-carcinoma chronic-eosinophilic-leukemia-nos chronic-lymphocytic-leukemia-small-lymphocytic-lymphoma chronic-lymphoproliferative-disorder-of-nk-cells chronic-myelogenous-leukemia chronic-myeloid-leukemia-bcr-abl1p chronic-myelomonocytic-leukemia-0 chronic-myelomonocytic-leukemia-1 chronic-myelomonocytic-leukemia-2 chronic-myelomonocytic-leukemia chronic-neutrophilic-leukemia ciliated-muconodular-papillary-tumor-of-the-lung cirm cisplatin city-of-hope-comprehensive-cancer-center city-of-hope-patient-and-family-education-library classical-hodgkin-lymphoma-ptld classical-hodgkin-lymphoma clear-cell-borderline-ovarian-tumor clear-cell-carcinoma-of-the-lung clear-cell-ependymoma clear-cell-meningioma clear-cell-odontogenic-carcinoma clear-cell-ovarian-cancer clear-cell-papillary-renal-cell-carcinoma clear-cell-sarcoma-of-kidney clear-cell-sarcoma cleveland-clinic clinical-cancer-research clinical-trials-dot-gov cms cnio coc cocr-ar cognitive-behavioral-therapy cold-spring-harbor-laboratory-cancer-center colectomy collecting-duct-renal-cell-carcinoma college-of-american-pathologists colon-adenocarcinoma-in-situ colon-adenocarcinoma colon-cancer-subreddit colon colonic-type-adenocarcinoma-of-the-appendix colonoscopy colorectal-adenocarcinoma colorectal combined-small-cell-lung-carcinoma complete-hydatidiform-mole congenital-nevus conjunctival-melanoma conventional-type-chordoma craniopharyngioma-adamantinomatous-type craniopharyngioma-papillary-type crptdf-ar crsba-dz crwb-dz cryoablation ct-colonoscopy ctca curium-pharma cutaneous-mastocytosis cutaneous-melanoma cutaneous-squamous-cell-carcinoma cyclophosphamide cystectomy cystic-tumor-of-the-pancreas cytarabine czechrepublic-ncc dacarbazine daiichi-sankyo damon-runyon-cancer-research-foundation dan-l-duncan-comprehensive-cancer-center dana-farber-harvard-cancer-center dana-farber dartmouth-cancer-center daunorubicin david-h-koch-institute-for-integrative-cancer-research-at-mit dedifferentiated-chondrosarcoma dedifferentiated-chordoma dedifferentiated-liposarcoma dendritic-cell-sarcoma dermatofibroma dermatofibrosarcoma-protuberans desmoid-aggressive-fibromatosis desmoplastic-infantile-astrocytoma desmoplastic-infantile-ganglioglioma desmoplastic-melanoma desmoplastic-nodular-medulloblastoma desmoplastic-small-round-cell-tumor desmoplastic-trichoepithelioma dicycloplatin diffuse-astrocytoma diffuse-glioma diffuse-intrinsic-pontine-glioma diffuse-large-b-cell-lymphoma-nos diffuse-type-stomach-adenocarcinoma disseminated-juvenile-xanthogranuloma dlbcl-associated-with-chronic-inflammation docetaxel dominicanrepublic-ncc doxifluridine doxorubicin dr-sebi-cure-for-cancer dta-dz duke-cancer-institute duodenal-adenocarcinoma duodenal-type-follicular-lymphoma dutch-cancer-society dysembryoplastic-neuroepithelial-tumor dysgerminoma-vulva-vagina dysgerminoma dysplastic-gangliocytoma-of-the-cerebellum-lhermitte-duclos-disease early-detection-book early-t-cell-precursor-lymphoblastic-leukemia ebus ebv-positive-dlbcl-nos ebv-positive-mucocutaneous-ulcer egypt-ncc electroacupuncture eli-lilly-and-company elsevier embase embryonal-carcinoma-cns-brain embryonal-carcinoma-testis embryonal-carcinoma-vulva-vagina embryonal-carcinoma embryonal-rhabdomyosarcoma embryonal-tumor-with-abundant-neuropil-and-true-rosettes embryonal-tumor emerging-med emperor-of-all-maladies encapsulated-glioma encr-sw endocervical-adenocarcinoma endocrine-mucin-producing-sweat-gland-carcinoma endometrial-carcinoma endometrial-stromal-sarcoma endometrioid-borderlin-ovarian-tumor endometrioid-ovarian-cancer enteropathy-associated-t-cell-lymphoma ependymoma ependymomal-tumor epirubicin epithelial-myoepithelial-carcinoma epithelial-type-metaplastic-breast-cancer epithelioid-hemangioendothelioma epithelioid-sarcoma epithelioid-trophoblastic-tumor ercr-ar erdheim-chester-disease erlotinib esophageal-adenocarcinoma esophageal-poorly-differentiated-carcinoma esophageal-squamous-cell-carcinoma esophagectomy esophagogastric-adenocarcinoma esophagus-stomach essential-thrombocythemia-myelofibrosis essential-thrombocythemia etoposide europa-donna-armenia ewing-sarcoma-of-soft-tissue ewing-sarcoma exatecan exercise extra-gonadal-germ-cell-tumor extrahepatic-cholangiocarcinoma extramammary-paget-disease extranodal-marginal-zone-lymphoma-of-mucosa-associated-lymphoid-tissue-malt-lymphoma extranodal-nk--t-cell-lymphoma-nasal-type extraosseous-plasmacytoma extraskeletal-myxoid-chondrosarcoma extraventricular-neurocytoma eye fda fecal-immunochemical-test fh-deficient-renal-cell-carcinoma fibroadenoma fibroblastic-osteosarcoma fibroblastic-reticular-cell-tumor fibrolamellar-carcinoma fibrosarcoma fibrothecoma florid-follicular-hyperplasia-ptld fluorouracil follicular-dendritic-cell-sarcoma follicular-lymphoma follicular-t-cell-lymphoma follicular-thyroid-cancer fotemustine fox-chase-cancer-center fred-and-pamela-buffett-cancer-center fred-hutch fred-hutchinson-university-of-washington-cancer-consortium free-diving french-national-cancer-institute gallbladder-adenocarcinoma-nos gallbladder-cancer gamma-heavy-chain-disease gangliocytoma ganglioglioma ganglioneuroblastoma ganglioneuroma gastrectomy gastric-remnant-adenocarcinoma gastric-type-mucinous-carcinoma gastrointestinal-neuroendocrine-tumors-of-the-esophagus-stomach gastrointestinal-neuroendocrine-tumors gastrointestinal-stromal-tumor gco gcr-ug gdc gefitinib gemcitabine genentech georgetown-lombardi-comprehensive-cancer-center georgia-ncc germ-cell-tumor-brain germ-cell-tumor-of-the-vulva germ-cell-tumor-with-somatic-type-malignancy germany-ncc germinal-center-b-cell-type germinoma gestational-trophoblastic-disease gfobt giant-cell-carcinoma-of-the-lung giant-cell-tumor-of-bone gideon-burrows-dot-com gilead-sciences glassy-cell-carcinoma-of-the-cervix glioblastoma-multiforme glioblastoma glioma-nos gliosarcoma glomangiosarcoma goblet-cell-carcinoid-of-the-appendix gonadoblastoma granular-cell-tumor granulosa-cell-tumor gsk hairy-cell-leukemia-variant hairy-cell-leukemia harold-c-simmons-comprehensive-cancer-center hawaii-tumor-registry head-and-neck-carcinoma-other head-and-neck-mucosal-melanoma head-and-neck-neuroendocrine-carcinoma head-and-neck-squamous-cell-carcinoma-of-unknown-primary head-and-neck-squamous-cell-carcinoma head-and-neck healing-strong hemangioblastoma hemangioma hemangiopericytoma-of-the-central-nervous-system hepatectomy hepatic-arterial-infusion hepatoblastoma hepatocellular-adenoma hepatocellular-carcinoma-plus-intrahepatic-cholangiocarcinoma hepatocellular-carcinoma hepatosplenic-t-cell-lymphoma herbert-irving-comprehensive-cancer-center hhs hhv8-positive-dlbcl-nos high-grade-b-cell-lymphoma-nos high-grade-b-cell-lymphoma-with-myc-and-bcl2-and-or-bcl6-rearrangements high-grade-endometrial-stromal-sarcoma high-grade-glioma-nos high-grade-neuroendocrine-carcinoma-of-the-colon-and-rectum high-grade-neuroendocrine-carcinoma-of-the-esophagus high-grade-neuroendocrine-carcinoma-of-the-ovary high-grade-neuroendocrine-carcinoma-of-the-stomach high-grade-neuroepithelial-tumor high-grade-serous-fallopian-tube-cancer high-grade-serous-ovarian-cancer high-grade-surface-osteosarcoma histiocytic-and-dendritic-cell-neoplasms histiocytic-dendritic-cell-sarcoma histiocytic-sarcoma hodgkin-lymphoma holden-comprehensive-cancer-center hollings-cancer-center hopa hope4cancer houston-methodist how-to-starve-cancer-book hungary-ncc huntsman-cancer-institute hurthle-cell-thyroid-cancer hyalinizing-trabecular-adenoma-of-the-thyroid hydroa-vacciniforme-like-lymphoproliferative-disorder hydroxyurea hypnosis hypopharynx-squamous-cell-carcinoma hysterectomy iacc-ao iaea iarc ibcr-ng ican icd-10-pcs icelandic-cancer-society idarubicin ifosfamide iga igg igm imatinib imerman-angels immature-teratoma-cns-brain immature-teratoma-vulva-vagina immature-teratoma immunotherapy imrt in-situ-follicular-neoplasia in-situ-mantle-cell-neoplasia incan indeterminate-dendritic-cell-tumor index-medicus india-nci indiana-university-melvin-and-bren-simon-comprehensive-cancer-center indolent-systemic-mastocytosis indolent-t-cell-lymphoproliferative-disorder-of-the-gi-tract infantile-fibrosarcoma infectious-mononucleosis-ptld inflammatory-breast-cancer inflammatory-myofibroblastic-bladder-tumor inflammatory-myofibroblastic-lung-tumor inflammatory-myofibroblastic-tumor interdigitating-dendritic-cell-sarcoma intestinal-ampullary-carcinoma intestinal-type-mucinous-carcinoma intestinal-type-stomach-adenocarcinoma intimal-sarcoma intraductal-papillary-mucinous-neoplasm intrahepatic-cholangiocarcinoma intramuscular-injection intravascular-large-b-cell-lymphoma intravenous-therapy intravesical-therapy invasive-breast-carcinoma invasive-hydatidiform-mole inverted-urothelial-papilloma iran-ncc ireland-nrg irinotecan ixabepilone johnson-and-johnson jonsson-comprehensive-cancer-center jordan-ncc journal-of-clinical-oncology journal-of-the-national-cancer-institute juvenile-myelomonocytic-leukemia juvenile-secretory-carcinoma-of-the-breast kaposi-sarcoma kazakhstan-ncc kcr-ug kecr-kn kegg kidney-cancer-subreddit kidney kncr-kn knight-cancer-institute kom-op-tegen-kanker kscr-gh langerhans-cell-histiocytosis langerhans-cell-sarcoma large-b-cell-lymphoma-with-irf4-rearrangement large-cell-anaplastic-medulloblastoma large-cell-lung-carcinoma-with-rhabdoid-phenotype large-cell-lung-carcinoma large-cell-neuroendocrine-carcinoma larotaxel laryngeal-cancer laryngectomy larynx-squamous-cell-carcinoma laura-and-isaac-perlmutter-cancer-center-at-nyu-langone-health leiomyoma leiomyosarcoma lentigo-maligna-melanoma lenvatinib leukapheresis leukemia-and-lymphoma-society leukemia liposarcoma lithuania-ncc liver-angiosarcoma liver-transplant liver lomustine low-dose-spiral-computed-tomography low-grade-central-osteosarcoma low-grade-endometrial-stromal-sarcoma low-grade-fibromyxoid-sarcoma low-grade-glioma-nos low-grade-neuroepithelial-tumor low-grade-serous-ovarian-cancer lumpectomy lung-adenocarcinoma-in-situ lung-adenocarcinoma lung-adenosquamous-carcinoma lung-cancer-subreddit lung-carcinoid lung-neuroendocrine-tumor lung-squamous-cell-carcinoma lung lymphedema-sleeve lymphocyte-depleted-classical-hodgkin-lymphoma lymphocyte-rich-classical-hodgkin-lymphoma lymphoepithelioma-like-carcinoma-of-the-lung lymphoid-atypical lymphoid-benign lymphoid-neoplasm lymphoma-subreddit lymphoma lymphomatoid-granulomatosis lymphomatoid-papulosis lymphoplasmacytic-lymphoma male-breast-cancer malignant-glomus-tumor malignant-lymphoma malignant-nonepithelial-tumor-of-the-liver malignant-peripheral-nerve-sheath-tumor malignant-phyllodes-tumor-of-the-breast malignant-rhabdoid-tumor-of-the-liver malignant-teratoma malignant-tumor mammary-analogue-secretory-carcinoma-of-salivary-gland-origin mammogram mantle-cell-lymphoma margin-probe marginal-zone-lymphoma marijuana markey-cancer-center masonic-cancer-center massage massey-cancer-center massgeneral mast-cell-leukemia mast-cell-sarcoma mastectomy mastocytosis mature-b-cell-neoplasms mature-t-and-nk-neoplasms mature-teratoma-cns-brain mature-teratoma-vulva-vagina mature-teratoma mayo-clinic-jacksonville mayo-clinic-phoenix mayo-clinic-rochester mays-cancer-center-at-ut-health-san-antonio mcr-tz mdanderson mds-mpn-unclassifiable mds-mpn-with-ring-sideroblasts-and-thrombocytosis mds-unclassifiable mds-with-excess-blasts-1 mds-with-excess-blasts-2 mds-with-excess-blasts mds-with-isolated-del5q mds-with-multilineage-dysplasia mds-with-ring-sideroblasts-and-multilineage-dysplasia mds-with-ring-sideroblasts-and-single-lineage-dysplasia mds-with-ring-sideroblasts mds-with-single-lineage-dysplasia mediastinoscopy meditation medlars medline medlineplus medullary-carcinoma-of-the-colon medullary-thyroid-cancer medulloblastoma-with-extensive-nodularity medulloblastoma medulloepithelioma medullomyoblastoma melanocytoma melanoma-of-unknown-primary melanoma melanotic-medulloblastoma melanotic-schwannoma melphalan-flufenamide melphalan memorial-sloan-kettering-cancer-center meningioma meningothelial-tumor mercaptopurine merck-and-co merck-group merkel-cell-carcinoma mesenchymal-chondrosarcoma-of-the-cns mesenchymal-chondrosarcoma mesonephric-carcinoma mesothelioma metaplastic-adenocarcinoma-with-spindle-cell-differentiation metaplastic-adenosquamous-carcinoma metaplastic-breast-cancer metaplastic-carcinosarcoma metaplastic-squamous-cell-carcinoma methotrexate miaderm-cream microcystic-adnexal-carcinoma microscope-confocal microscope-darkfield microscope-electron microscope-flourescence microscope-inverted microscope-optical microscope-phasecontrast microscope-polarizing microscope-scanningprobe microscope-stereo microscope-ultraviolet microwave-ablation miscellaneous-brain-tumor miscellaneous-neuroepithelial-tumor mitobronitol mitomycin mitoxantrone mixed-ampullary-carcinoma mixed-cancer-types mixed-cellularity-classical-hodgkin-lymphoma mixed-cervical-carcinoma mixed-germ-cell-tumor-cns-brain mixed-germ-cell-tumor-testis mixed-germ-cell-tumor-vulva-vagina mixed-germ-cell-tumor mixed-ovarian-carcinoma mixed-phenotype-acute-leukemia-b-myeloid-nos mixed-phenotype-acute-leukemia-t-myeloid-nos mixed-phenotype-acute-leukemia-with-t922q34.1q11.2-bcr-abl1 mixed-phenotype-acute-leukemia-with-tv11q23.3-kmt2a-rearranged mixed-type-metaplastic-breast-cancer mmcr-mo mncr-ma moderna moffitt-cancer-center molar-pregnancy monoclonal-b-cell-lymphocytosis monoclonal-gammopathy-of-undetermined-significance monoclonal-immunoglobulin-deposition-diseases-other monoclonal-immunoglobulin-deposition-diseases monomorphic-epitheliotropic-intestinal-t-cell-lymphoma monomorphic-ptld-b--and-t--nk-cell-types montefiore-einstein-cancer-center moores-comprehensive-cancer-center mrisktool mt-sdna mu-heavy-chain-disease mucinous-adenocarcinoma-of-the-appendix mucinous-adenocarcinoma-of-the-colon-and-rectum mucinous-adenocarcinoma-of-the-vulva-vagina mucinous-borderline-ovarian-tumor mucinous-carcinoma mucinous-cystic-neoplasm mucinous-ovarian-cancer mucinous-stomach-adenocarcinoma mucoepidermoid-carcinoma-of-the-lung mucoepidermoid-carcinoma mucosal-melanoma-of-the-esophagus mucosal-melanoma-of-the-urethra mucosal-melanoma-of-the-vulva-vagina multiple-myeloma multiplemyeloma-subreddit music-therapy mycanceriq mychart mycosis-fungoides myelodysplastic-myeloproliferative-neoplasms myelodysplastic-syndromes myeloid-atypical myeloid-benign myeloid-leukemia-associated-with-down-syndrome myeloid-lymphoid-neoplasms-with-eosinophilia-and-rearrangement-of-pdgfra-pdgfrb-or-fgfr1-or-with-pcm1-jak2 myeloid-lymphoid-neoplasms-with-fgfr1-rearrangement myeloid-lymphoid-neoplasms-with-pcm1-jak2 myeloid-lymphoid-neoplasms-with-pdgfra-rearrangement myeloid-lymphoid-neoplasms-with-pdgfrb-rearrangement myeloid-neoplasm myeloid-neoplasms-with-germ-line-predisposition myeloid-proliferations-related-to-down-syndrome myeloid-sarcoma myeloid myeloproliferative-neoplasms-unclassifiable myeloproliferative-neoplasms myoepithelial-carcinoma myofibroma myofibromatosis myopericytoma myxofibrosarcoma myxoid-chondrosarcoma myxoid-round-cell-liposarcoma myxoma myxopapillary-ependymoma naaccr nacr-ng nasopharyngeal-carcinoma national-breast-cancer-foundation national-cancer-center-japan national-cancer-center-korea national-cancer-grid-india national-cancer-institute-brazil national-cancer-research-institute-uk national-prostate-cancer-awareness-month natural-killer-nk-cell-lymphoblastic-leukemia-lymphoma natural-strategies-for-cancer-patients nature-reviews-cancer navigational-bronchoscopy ncbi-gene ncbi ncc nccn nccp-af nccp-al nccr nccs ncdb nci ncr-ar ncra ncrsa-za nedaplatin nephrectomy nerve-sheath-tumor netherlands-ncc neuroblastoma neuroendocrine-carcinoma-nos neuroendocrine-tumor-nos neurofibroma newyork-presbyterian-hospital nfr nhgri nicr nih nimustine nitrosoureas nivolumab nlm nncr-na nodal-marginal-zone-lymphoma nodal-peripheral-t-cell-lymphoma-with-tfh-phenotype nodular-lymphocyte-predominant-hodgkin-lymphoma nodular-sclerosis-classical-hodgkin-lymphoma non-hodgkin-lymphoma non-seminomatous-germ-cell-tumor non-small-cell-lung-cancer norwegian-cancer-society novartis novo-nordisk nscr-ng nswcr-au ntcr-au nut-carcinoma-of-the-lung nut-midline-carcinoma-of-the-head-and-neck nutrition ocular-melanoma odontogenic-carcinoma olfactory-neuroblastoma oligoastrocytoma oligodendroglioma onclive oncocytic-adenoma-of-the-thyroid oncokb oncotree one-plus-one-cars oneal-comprehensive-cancer-center oophorectomy oral-administration oral-cancer-foundation oral-cancer oral-cavity-squamous-cell-carcinoma orchiectomy oropharyngeal-cancer oropharynx-squamous-cell-carcinoma ossifying-fibromyxoid-tumor osteoblastic-osteosarcoma osteoclastic-giant-cell-tumor osteosarcoma other-uterine-tumor other our-world-in-data-cancer ovarian-cancer-other ovarian-cancer-subreddit ovarian-cancer ovarian-carcinosarcoma-malignant-mixed-mesodermal-tumor ovarian-choriocarcinoma-nos ovarian-epithelial-tumor ovarian-germ-cell-tumor ovarian-seromucinous-adenoma ovarian-seromucinous-borderline-tumor ovarian-seromucinous-carcinoma oxaliplatin paclitaxel pact paget-disease-of-the-nipple paleo-diet panama-ncc pancreas pancreatectomy pancreatic-adenocarcinoma pancreatic-neuroendocrine-tumor pancreatobiliary-ampullary-carcinoma pancreatoblastoma papillary-glioneuronal-tumor papillary-meningioma papillary-renal-cell-carcinoma papillary-stomach-adenocarcinoma papillary-thyroid-cancer papillary-tumor-of-the-pineal-region paraganglioma parathyroid-cancer parathyroid-carcinoma parosteal-osteosarcoma partial-hydatidiform-mole pediatric-type-follicular-lymphoma pembrolizumab penile-squamous-cell-carcinoma penis perihilar-cholangiocarcinoma periosteal-osteosarcoma peripheral-nervous-system peripheral-t-cell-lymphoma-nos peritoneal-mesothelioma peritoneal-serous-carcinoma peritoneum perivascular-epithelioid-cell-tumor pfizer phac pheochromocytoma phyllodes-tumor-of-the-breast pilocytic-astrocytoma pilomyxoid-astrocytoma pineal-parenchymal-tumor-of-intermediate-differentiation pineal-tumor pineoblastoma pineocytoma pipobroman pirarubicin pituicytoma pituitary-adenoma pituitary-carcinoma placental-site-trophoblastic-tumor plasma-cell-myeloma plasmablastic-lymphoma plasmacytic-hyperplasia-ptld plasmacytoid-signet-ring-cell-bladder-carcinoma pleomorphic-carcinoma-of-the-lung pleomorphic-liposarcoma pleomorphic-rhabdomyosarcoma pleomorphic-xanthoastrocytoma pleura pleural-mesothelioma-biphasic-type pleural-mesothelioma-epithelioid-type pleural-mesothelioma-sarcomatoid-type pleural-mesothelioma pleuropulmonary-blastoma polycythaemia-vera-myelofibrosis polycythemia-vera polyembryoma-vulva-vagina polyembryoma polymorphic-ptld poorly-differentiated-carcinoma-nos poorly-differentiated-carcinoma-of-the-stomach poorly-differentiated-carcinoma-of-the-uterus poorly-differentiated-non-small-cell-lung-cancer poorly-differentiated-thyroid-cancer poorly-differentiated-vaginal-carcinoma porocarcinoma-spiroadenocarcinoma poroma-acrospiroma porphyria-cutania-tarda posttransplant-lymphoproliferative-disorders prevent-cancer-foundation primary-brain-tumor primary-cns-melanocytic-tumors primary-cns-melanoma primary-cutaneous-acral-cd8-positive-t-cell-lymphoma primary-cutaneous-anaplastic-large-cell-lymphoma primary-cutaneous-cd30-positive-t-cell-lymphoproliferative-disorders primary-cutaneous-cd4-positive-small-medium-t-cell-lymphoproliferative-disorder primary-cutaneous-cd8-positive-aggressive-epidermotropic-cytotoxic-t-cell-lymphoma primary-cutaneous-dlbcl-leg-type primary-cutaneous-follicle-center-lymphoma primary-cutaneous-gamma-delta-t-cell-lymphoma primary-dlbcl-of-the-central-nervous-system primary-effusion-lymphoma primary-mediastinal-thymic-large-b-cell-lymphoma primary-myelofibrosis-prefibrotic-early-stage primary-myelofibrosis primary-myelofibrosisovert-fibrotic-stage primary-neuroepithelial-tumor primitive-neuroectodermal-tumor princess-margaret-cancer-centre proliferating-pilar-cystic-tumor prostate-adenocarcinoma prostate-cancer-subreddit prostate-neuroendocrine-carcinoma prostate-small-cell-carcinoma prostate-squamous-cell-carcinoma prostate prostatectomy proximal-type-epithelioid-sarcoma pseudomyogenic-hemangioendothelioma pubmed-central pubmed pulmonary-lymphangiomyomatosis pulmonary-metastasectomy purdue-institute-for-cancer-research pure-erythroid-leukemia qatar-ncc qcancer qcr-au radiation-associated-sarcoma radical-remission-surviving-cancer-against-all-odds radioembolization radiofrequency-ablation ranimustine rdca-ci rdca-dz rdcb-mo rdcdb-cg rdcg-gu rdclr rdcm-ma rectal-adenocarcinoma refractory-cytopenia-of-childhood regeneron regorafenib renal-angiomyolipoma renal-cell-carcinoma renal-clear-cell-carcinoma-with-sarcomatoid-features renal-clear-cell-carcinoma renal-medullary-carcinoma renal-mucinous-tubular-spindle-cell-carcinoma renal-neuroendocrine-tumor renal-non-clear-cell-carcinoma renal-oncocytoma renal-small-cell-carcinoma retinoblastoma rhabdoid-cancer rhabdoid-meningioma rhabdomyosarcoma rivkin-center-risk-assessment-tool robert-h-lurie-comprehensive-cancer-center robotic-assisted-bronchoscopy roche romidepsin rosai-dorfman-disease rosette-forming-glioneuronal-tumor-of-the-fourth-ventricle roswell-park-comprehensive-cancer-center round-cell-sarcoma-nos rpcc rpt-ar rush-university-medical-center rutgers-cancer-institute-of-new-jersey sacr-au saecpcr-za salivary-adenocarcinoma salivary-carcinoma-other salivary-carcinoma salivary-duct-carcinoma salivary-gland-oncocytoma salivary-gland-type-tumor-of-the-lung salk-institute-cancer-center sanford-burnham-prebys-medical-discovery-institute sanofi sarcoma-nos sarcomatoid-carcinoma-of-the-lung sarcomatoid-carcinoma-of-the-urinary-bladder sarcomatoid-renal-cell-carcinoma satraplatin sauna sbrt schwannoma sclerosing-epithelioid-fibrosarcoma scr-dz seattle-childrens-hospital sebaceous-carcinoma secondary-osteosarcoma seer sellar-tumor seminoma semustine serene-hospice-care serous-borderline-ovarian-tumor-micropapillary serous-borderline-ovarian-tumor serous-cystadenoma-of-the-pancreas serous-ovarian-cancer sertoli-leydig-cell-tumor sex-cord-stromal-tumor-testis sex-cord-stromal-tumor sezary-syndrome sialoblastoma sidney-kimmel-cancer-center-at-thomas-jefferson-university sidney-kimmel-comprehensive-cancer-center sigmoidoscopy signet-ring-cell-adenocarcinoma-of-the-colon-and-rectum signet-ring-cell-carcinoma-of-the-stomach signet-ring-cell-type-of-the-appendix signet-ring-mucinous-carcinoma sinonasal-adenocarcinoma sinonasal-squamous-cell-carcinoma sinonasal-undifferentiated-carcinoma sinopharm sitc skin-adnexal-carcinoma skin-cancer-subreddit skin sleep small-bowel-cancer small-bowel-well-differentiated-neuroendocrine-tumor small-cell-bladder-cancer small-cell-carcinoma-of-the-cervix small-cell-carcinoma-of-the-ovary small-cell-carcinoma-of-the-stomach small-cell-carcinoma-of-unknown-primary small-cell-gallbladder-carcinoma small-cell-glioblastoma small-cell-lung-cancer small-cell-osteosarcoma small-intestinal-carcinoma smoking-cessation smoldering-systemic-mastocytosis smooth-muscle-neoplasm-nos sncr-sy soft-tissue-myoepithelial-carcinoma soft-tissue solid-papillary-carcinoma-of-the-breast solid-pseudopapillary-neoplasm-of-the-pancreas solitary-fibrous-tumor-hemangiopericytoma solitary-fibrous-tumor-of-the-central-nervous-system solitary-plasmacytoma-of-bone sorafenib spindle-cell-carcinoma-of-the-lung spindle-cell-oncocytoma-of-the-adenohypophysis spindle-cell-rhabdomyosarcoma spindle-cell-sclerosing-rhabdomyosarcoma spiroma-spiradenoma spitzoid-melanoma splenectomy splenic-b-cell-lymphoma-leukemia-unclassifiable splenic-diffuse-red-pulp-small-b-cell-lymphoma splenic-marginal-zone-lymphoma squamous-cell-carcinoma-of-the-vulva-vagina squamous-cell-carcinoma st-jude-childrens-research-hospital stanford-cancer-institute-sci steam-bath stephenson-cancer-center steroid-cell-tumor-nos stomach-adenocarcinoma stomach-cancer streptozotocin stress-management subcutaneous-administration subcutaneous-panniculitis-like-t-cell-lymphoma subependymoma susan-g-komen sweat-gland-adenocarcinoma sweat-gland-carcinoma-apocrine-eccrine-carcinoma sweden-nch swedish-cancer-institute swedish-national-cancer-register swiss-cancer-league swog sylvester-comprehensive-cancer-center synovial-sarcoma systemic-ebv-positive-t-cell-lymphoma-of-childhood systemic-mastocytosis-with-an-associated-hematological-neoplasm systemic-mastocytosis t-cell-histiocyte-rich-large-b-cell-lymphoma t-cell-large-granular-lymphocytic-leukemia t-cell-prolymphocytic-leukemia t-lymphoblastic-leukemia-lymphoma tai-chi takeda tamoxifen taxotere tcga tcr-au telangiectatic-osteosarcoma temozolomide teniposide tenosynovial-giant-cell-tumor-diffuse-type teratoma tesetaxel testicular-lymphoma testicular-mesothelioma testis teva the-barbara-ann-karmanos-cancer-institute the-biology-of-cancer the-bright-hour-a-memoir-of-living-and-dying the-c-word the-cancer-journals the-death-of-cancer-book the-dog-cancer-survival-guide the-eden-prescription-book the-effects-of-herbs-and-fruits-on-leukaemia the-hope-foundation the-hyve the-immortal-life-of-henrietta-lacks the-jackson-laboratory-cancer-center the-lancet-oncology the-metabolic-approach-to-cancer the-ohio-state-university-comprehensive-cancer-center the-skin-cancer-foundation the-truth-about-cancer the-truth-in-small-doses-book the-university-of-chicago-comprehensive-cancer-center the-university-of-kansas-cancer-center the-wistar-institute-cancer-center therapy-related-acute-myeloid-leukemia therapy-related-myelodysplastic-syndrome therapy-related-myeloid-neoplasms thiotepa thymic-carcinoma thymic-epithelial-tumor thymic-neuroendocrine-tumor thymoma thymus thyroid-cancer-subreddit thyroid thyroidectomy tioguanine tisch-cancer-institute tlcr-dz tocr-dz topical-medication topotecan toxin-avoidance transarterial-chemoembolization transarterial-embolization transient-abnormal-myelopoiesis translocation-associated-renal-cell-carcinoma treosulfan tretinoin triaziquone triethylenemelamine trofosfamide tubular-adenoma-of-the-colon tubular-stomach-adenocarcinoma uc-davis-comprehensive-cancer-center uccc ucsf-helen-diller-family-comprehensive-cancer-center ue-lifesciences uicc umls un unc-lineberger-comprehensive-cancer-center unclassified-renal-cell-carcinoma undifferentiated-carcinoma-of-the-pancreas undifferentiated-embryonal-sarcoma-of-the-liver undifferentiated-malignant-neoplasm undifferentiated-pleomorphic-sarcoma-malignant-fibrous-histiocytoma-high-grade-spindle-cell-sarcoma undifferentiated-stomach-adenocarcinoma undifferentiated-uterine-sarcoma unicancer university-of-colorado-cancer-center university-of-hawaii-cancer-center university-of-maryland-marlene-and-stewart-greenebaum-comprehensive-cancer-center university-of-michigan-rogel-cancer-center university-of-new-mexico-cancer-research-and-treatment-center university-of-virginia-cancer-center university-of-wisconsin-carbone-cancer-center upmc-hillman-cancer-center upper-tract-urothelial-carcinoma urachal-adenocarcinoma urachal-carcinoma uramustine urethral-adenocarcinoma urethral-cancer urethral-squamous-cell-carcinoma urethral-urothelial-carcinoma urothelial-papilloma usc-norris-comprehensive-cancer-center uscs uterine-adenosarcoma uterine-adenosquamous-carcinoma uterine-carcinosarcoma-uterine-malignant-mixed-mullerian-tumor uterine-clear-cell-carcinoma uterine-dedifferentiated-carcinoma uterine-endometrioid-carcinoma uterine-epithelioid-leiomyosarcoma uterine-leiomyoma uterine-leiomyosarcoma uterine-mesonephric-carcinoma uterine-mixed-endometrial-carcinoma uterine-mucinous-carcinoma uterine-myxoid-leiomyosarcoma uterine-neuroendocrine-carcinoma uterine-perivascular-epithelioid-cell-tumor uterine-sarcoma-mesenchymal uterine-sarcoma-other uterine-serous-carcinoma-uterine-papillary-serous-carcinoma uterine-smooth-muscle-tumor-of-uncertain-malignant-potential uterine-smooth-muscle-tumor uterine-undifferentiated-carcinoma uterus uveal-melanoma vacf vaginal-adenocarcinoma valrubicin vanderbilt-ingram-cancer-center vats vcr-au veganism vegetarianism vemurafenib verrucous-penile-squamous-cell-carcinoma viatris villoglandular-adenocarcinoma-of-the-cervix villoglandular-carcinoma vinblastine vincristine vindesine vinorelbine vismodegib vitamin-a vitamin-b vitamin-c vitamin-d vorinostat vulva-vagina wacanreg wake-forest-baptist-comprehensive-cancer-center waldenstrom-macroglobulinemia warty-penile-squamous-cell-carcinoma wcrf-uk wcrf weight-loss well-differentiated-liposarcoma well-differentiated-neuroendocrine-tumor-of-the-appendix well-differentiated-neuroendocrine-tumor-of-the-rectum well-differentiated-neuroendocrine-tumors-of-the-stomach well-differentiated-thyroid-cancer when-breath-becomes-air who wilms-tumor wim-hof-method winning-the-war-on-cancer-the-epic-journey-towards-a-natural-cure-book winship-cancer-institute wkof world-cancer-day world-lymphoma-awareness-day yale-cancer-center yale-introduction-to-breast-cancer yoga yolk-sac-tumor-cns-brain yolk-sac-tumor-testis yolk-sac-tumor-vulva-vagina yolk-sac-tumor your-disease-risk zmncr-zm zncr-zw zorubicin
urlCell
 highlightScope constant.language
 regex (ftp|https?)://.+
externalGuidCell
 description A GUID from another site.
fileNameCell
 highlightScope string
abstractTrueBaseColumnParser
 cells columnNameCell
 string typeForCsvDocs unspecified
 cruxFromId
 boolean isColumn true
 single
 javascript
  get columnValue() {
   return this.content
  }
  get columnName() {
   return this.definition.cruxPathAsColumnName
  }
abstractUrlColumnParser
 string typeForCsvDocs url
 cells columnNameCell urlCell
 extends abstractTrueBaseColumnParser
amazonParser
 extends abstractUrlColumnParser
 description What is the Amazon product URL for this item?
cancerDotGovParser
 extends abstractUrlColumnParser
 string sourceDomain cancer.gov
 description What is the URL for this cancer type on cancer.gov?
cancerDotOrgParser
 extends abstractUrlColumnParser
 string sourceDomain cancer.org
 description What is the URL for this cancer type on cancer.org?
abstractCharityRegistryParser
 extends abstractUrlColumnParser
englandAndWalesCharityDetailsParser
 description What is the URL for the charity's details page on the Charity Commission website?
 extends abstractCharityRegistryParser
 string sourceDomain register-of-charities.charitycommission.gov.uk
charityNavigatorParser
 description What is the URL for the charity's details page on the Charity Navigator website?
 extends abstractCharityRegistryParser
 string sourceDomain charitynavigator.org
guideStarParser
 description What is the URL for the charity's details page on the GuideStar website?
 extends abstractCharityRegistryParser
 string sourceDomain guidestar.org
greatNonProfitsParser
 description What is the URL for the charity's details page on the Great Non-Profits website?
 extends abstractCharityRegistryParser
 string sourceDomain greatnonprofits.org
investorRelationsPageParser
 extends abstractUrlColumnParser
 contentKey url
 description What is the URL to the company's investor relations page?
abstractStockExchangeParser
 extends abstractUrlColumnParser
nyseParser
 description What is the URL to the company's ticker on NYSE?
 extends abstractStockExchangeParser
 string sourceDomain nyse.com
nasdaqParser
 description What is the URL to the company's ticker on NASDAQ?
 extends abstractStockExchangeParser
 string sourceDomain nasdaq.com
courseraParser
 description What is the link to this course on Coursera?
 extends abstractUrlColumnParser
 string sourceDomain coursera.com
abstractSocialMediaParser
 extends abstractUrlColumnParser
 // todo remove the need for the below from grammar
 string sortKey abstractSocialMediaParser
 contentKey url
facebookParser
 extends abstractSocialMediaParser
 string sourceDomain facebook.com
 description What is the URL of the Facebook page for this entity?
 followersParser
  extends abstractFollowersParser
gabParser
 description What is the URL to this thing's gab page?
 extends abstractSocialMediaParser
 string sourceDomain gab.com
 followersParser
  extends abstractFollowersParser
instagramParser
 description What is the URL to this thing's Instagram page?
 extends abstractSocialMediaParser
 string sourceDomain instagram.com
 followersParser
  extends abstractFollowersParser
linkedinParser
 description What is the LinkedIn page for this entity?
 extends abstractSocialMediaParser
 string sourceDomain linkedin.com
 followersParser
  extends abstractFollowersParser
pinterestParser
 extends abstractSocialMediaParser
 string sourceDomain pinterest.com
 description What is the URL to this entity's Pinterest page?
 followersParser
  extends abstractFollowersParser
rumbleParser
 description What is the URL to this thing's rumble page?
 extends abstractSocialMediaParser
 string sourceDomain rumble.com
 followersParser
  extends abstractFollowersParser
telegramParser
 description What is the URL to this thing's Telegram page?
 extends abstractSocialMediaParser
 string sourceDomain t.me
 followersParser
  extends abstractFollowersParser
twitterParser
 extends abstractSocialMediaParser
 string sourceDomain twitter.com
 description What is the URL to the Twitter profile of this entity?
 followersParser
  extends abstractFollowersParser
vimeoParser
 description What is the URL to this thing's vimeo page?
 extends abstractSocialMediaParser
 string sourceDomain vimeo.com
 followersParser
  extends abstractFollowersParser
youTubeChannelParser
 extends abstractSocialMediaParser
 description What is the URL of this entity's YouTube channel?
 string sourceDomain youtube.com
 followersParser
  extends abstractFollowersParser
gcoParser
 extends abstractUrlColumnParser
 string sourceDomain gco.iarc.fr
 description What is the URL for this cancer type in the Global Cancer Observatory?
githubParser
 description What is the URL to the organization's GitHub page?
 extends abstractUrlColumnParser
 string sourceDomain github.com
githubRepoParser
 description What is the URL to this project on GitHub?
 extends abstractUrlColumnParser
 string sourceDomain github.com
nciLinkParser
 description What is the URL to the organization's page on the NCI website?
 extends abstractUrlColumnParser
 string sourceDomain cancer.gov
nciImageParser
 description What is the URL to the organization's image on the NCI website?
 extends abstractUrlColumnParser
 string sourceDomain cancer.gov
pdfParser
 extends abstractUrlColumnParser
 description What is the URL of the PDF file?
subredditParser
 extends abstractUrlColumnParser
 string sourceDomain reddit.com
 contentKey url
 description What is the URL of a subreddit(s) for this thing?
 membersParser
  extends abstractAnnualPopulationCountMapParser
  description How many members in this subreddit?
referenceParser
 extends abstractUrlColumnParser
 description What is a URL to a reference about this thing?
 single false
websiteParser
 extends abstractUrlColumnParser
 description What is the URL to this entity's website?
eventsPageParser
 extends abstractUrlColumnParser
 description What is the URL to this entity's events page?
wikipediaParser
 extends abstractUrlColumnParser
 description What is the URL of this concept on Wikipedia, if and only if it has a page dedicated to it?
 string sourceDomain wikipedia.org
wolframAlphaParser
 extends abstractUrlColumnParser
 description What is the URL to this concept on WolframAlpha?
 string sourceDomain wolframalpha.com
abstractUrlGuidColumnParser
 description A column containing a URL that is also a Globablly Unique Identifier (GUID) for an entity on that site.
 extends abstractUrlColumnParser
youTubeParser
 extends abstractUrlColumnParser
 description What is the URL to a YouTube video about this thing?
 string sourceDomain youtube.com
 single false
abstractHashMapColumnParser
 string typeForCsvDocs multilineStringMap
 extends abstractTrueBaseColumnParser
 javascript
  get columnValue() {
   return this.childrenToString()
  }
abstractAnnualPopulationCountMapParser
 catchAllParser annualPopulationCountParser
 description A map of counts, one per year.
 extends abstractHashMapColumnParser
annualDeathsReportParser
 cells columnNameCell countryCodeCell urlCell
 description Data from an annual report on cancer deaths for a particular country.
 extends abstractAnnualPopulationCountMapParser
membersParser
 extends abstractAnnualPopulationCountMapParser
 description How many members does this organization have?
abstractEnumColumnParser
 string typeForCsvDocs enum
 cells columnNameCell enumCell
 extends abstractTrueBaseColumnParser
cancerTypesParser
 description Which cancer type(s) does this entity specialize in?
 cells columnNameCell cancerTypeCell
 catchAllCellType cancerTypeCell
 extends abstractEnumColumnParser
routesOfAdministrationParser
 cells columnNameCell routesOfAdministrationCell
 catchAllCellType routesOfAdministrationCell
 extends abstractEnumColumnParser
 description What is the route of administration for this drug?
publicationFrequencyParser
 extends abstractEnumColumnParser
 description How often does the publication come out?
 cells columnNameCell publicationFrequencyCell
typeParser
 description What kind of concept is this?
 cells columnNameCell typeCell
 catchAllCellType typeCell
 extends abstractEnumColumnParser
 required
abstractWordColumnParser
 description A single word.
 cells columnNameCell wordCell
 string typeForCsvDocs word
 extends abstractTrueBaseColumnParser
abstractChemicalGuidParser
 extends abstractWordColumnParser
drugBankParser
 extends abstractChemicalGuidParser
 string sourceDomain drugbank.com
 description What is the DrugBank ID of this drug?
keggParser
 extends abstractChemicalGuidParser
 string sourceDomain genome.jp
 description What is the Kegg ID for this thing?
medlinePlusParser
 extends abstractChemicalGuidParser
 string sourceDomain medlineplus.gov
 description What is the MedlinePlus ID for this thing?
pubChemParser
 extends abstractChemicalGuidParser
 string sourceDomain pubchem.ncbi.nlm.nih.gov
 description What is the PubChem Compound ID of this chemical?
einParser
 description What is their U.S. Employer Identification Number?
 extends abstractWordColumnParser
nciCodeParser
 description What is the NCI code for this concept?
 extends abstractWordColumnParser
 string sourceDomain ncithesaurus.nci.nih.gov
oncoTreeIdParser
 description What is the OncoTree ID for this cancer type?
 extends abstractWordColumnParser
 string sourceDomain oncotree.mskcc.org
parentOncoTreeIdParser
 description What is the OncoTree ID for the parent of this cancer type?
 extends abstractWordColumnParser
 string sourceDomain oncotree.mskcc.org
umlsParser
 description What is the Unified Medical Language System ID for this?
 extends abstractWordColumnParser
 string sourceDomain www.nlm.nih.gov
domainNameParser
 description What is the domain name owned by this entity, if any?
 extends abstractWordColumnParser
 inScope registeredParser
 contentKey domain
 registeredParser
  extends abstractYearColumnParser
  description What year was this domain first purchased?
  single
abstractStringColumnParser
 string typeForCsvDocs string
 catchAllCellType stringCell
 extends abstractTrueBaseColumnParser
companyParser
 extends abstractStringColumnParser
 description What is the name of the company that makes this product?
idParser
 description What is the name of this file without the extension?
 extends abstractStringColumnParser
 boolean isComputed true
 boolean suggestInAutocomplete false
descriptionParser
 extends abstractStringColumnParser
 description What is a short description of this thing?
nextDateParser
 extends abstractStringColumnParser
 description When will this event take place next?
originCommunityParser
 description What community did this originate in?
 extends abstractStringColumnParser
countryParser
 description In what country is this?
 catchAllCellType countryNameCell
 // todo make country a wwc kind
 extends abstractStringColumnParser
cityParser
 description What city and state is this in?
 catchAllCellType cityStateCell
 extends abstractStringColumnParser
titleParser
 description What is the title of this concept?
 extends abstractStringColumnParser
 required
standsForParser
 description If the title is an acronym what does/did it stand for?
 extends abstractStringColumnParser
akaParser
 description Is there another name(s) for the thing?
 extends abstractStringColumnParser
 single false
oldNameParser
 description What is the old name(s) of this thing?
 extends abstractStringColumnParser
 single false
tradenamesParser
 description What are the tradenames for the drug?
 extends abstractStringColumnParser
 listDelimiter  && 
nciDesignationParser
 extends abstractStringColumnParser
 description Which of the 3 NCI designations does this research center have?
 string sourceDomain cancer.gov
hostSchoolParser
 extends abstractStringColumnParser
 description What is the host university or college of this research center?
 string sourceDomain cancer.gov
mainTypeParser
 description What is the main type of cancer this is categorized under in OncoTree?
 extends abstractStringColumnParser
 string sourceDomain oncotree.mskcc.org
tissueParser
 description What is the tissue type for this cancer type?
 extends abstractStringColumnParser
 string sourceDomain oncotree.mskcc.org
phoneNumberParser
 extends abstractStringColumnParser
 description What is the phone number for the organization?
journalParser
 extends abstractStringColumnParser
 description What journal did this paper appear in?
authorParser
 extends abstractStringColumnParser
 description What is the name of the author(s)?
abstractStringListColumnParser
 string typeForCsvDocs string[]
 description A list of strings separated by the \`listDelimiter\`. The default \`listDelimiter\` is space.
 extends abstractStringColumnParser
 listDelimiter  
abstractTrueBaseLinksColumnParser
 description Links to other files in the TrueBase.
 catchAllCellType trueBaseIdCell
 string typeForCsvDocs trueBaseId[]
 extends abstractStringListColumnParser
 javascript
  get trueBaseIds() {
   return this.getWordsFrom(1)
  }
  updateTruebaseIds(oldTrueBaseId, newTrueBaseId) {
   this.setContent(
    this.getWordsFrom(1)
     .map((word) => (word === oldTrueBaseId ? newTrueBaseId : word))
     .join(" ")
   )
  }
abstractRelationshipParser
 extends abstractTrueBaseLinksColumnParser
relatedParser
 extends abstractRelationshipParser
 description What entities are related?
parentOrganizationParser
 extends abstractRelationshipParser
 description What is the parent entity(ies)?
uscsIdParser
 description What is the ID of this Cancer Type in the U.S. Cancer Statistics data?
 extends abstractStringColumnParser
 string sourceDomain cdc.gov
abstractNumericColumnParser
 string typeForCsvDocs number
 extends abstractTrueBaseColumnParser
abstractIntColumnParser
 string typeForCsvDocs integer
 cells columnNameCell intCell
 extends abstractNumericColumnParser
abstractComputedSumColumnParser
 boolean isComputed true
 boolean suggestInAutocomplete false
 extends abstractIntColumnParser
lengthParser
 extends abstractComputedSumColumnParser
 // todo: bug the below line should be included via inheritance from WWC.
 boolean suggestInAutocomplete false
 description How many top level questions do we have about this?
abstractYearColumnParser
 cells columnNameCell yearCell
 extends abstractIntColumnParser
appearedParser
 description What year did this first appear?
 extends abstractYearColumnParser
closedParser
 description What year did this close?
 extends abstractYearColumnParser
oncoTreeLevelParser
 description What is the OncoTree level for this cancer type?
 extends abstractIntColumnParser
 string sourceDomain oncotree.mskcc.org
subTypesParser
 description How many subtypes of this cancer type in OncoTree?
 extends abstractIntColumnParser
 string sourceDomain oncotree.mskcc.org
abstractFollowersParser
 // todo: clarify that 1 columnParser definition will equate to a max of 1 column in a TrueBase CSV.
 // Extending an abstract parser with inScope parsers will not create new columns for each of those inScope parsers.
 // We should either fix this or throw a warning or something if it occurs.
 extends abstractIntColumnParser
 description How many followers on this platform does this account have?
usNewsRankParser
 extends abstractIntColumnParser
 description Where does this hospital rank in the U.S. News cancer rankings located at https://health.usnews.com/best-hospitals/rankings/cancer?
 string sourceDomain usnews.com
uscsDeathsPerYearParser
 extends abstractIntColumnParser
 description What are the cumulative number of deaths per year for a cancer type in the U.S. Cancer Statistics report for this year?
uscsCasesPerYearParser
 extends abstractIntColumnParser
 description What are the cumulative number of cases per year for a cancer type in the U.S. Cancer Statistics report for this year?
abstractCountColumnParser
 description A positive count of something. People, for example. Min is 0.
 cells columnNameCell countCell
 extends abstractIntColumnParser
abstractPopulationCountColumnParser
 extends abstractCountColumnParser
abstractComputedEstimateColumnParser
 boolean isComputed true
 boolean suggestInAutocomplete false
 extends abstractCountColumnParser
abstractComputedRankColumnParser
 boolean isComputed true
 boolean suggestInAutocomplete false
 extends abstractIntColumnParser
abstractPercentageColumnParser
 cells columnNameCell percentCell
 extends abstractNumericColumnParser
uscsMortalityRateParser
 extends abstractPercentageColumnParser
 description What is the deaths/cases ratio in the USCS data as a percentage between 0-100 for this year?
abstractFloatColumnParser
 cells columnNameCell floatCell
 extends abstractNumericColumnParser
abstractBooleanColumnParser
 string typeForCsvDocs boolean
 cells columnNameCell boolCell
 extends abstractTrueBaseColumnParser
isOpenSourceParser
 description Is this an open source project?
 extends abstractBooleanColumnParser
isPublicDomainParser
 description Is this a public domain project?
 extends abstractBooleanColumnParser
abstractStringBlobColumnParser
 string typeForCsvDocs multilineString
 extends abstractTrueBaseColumnParser
 baseParser blobParser
 javascript
  get columnValue() {
   return this.childrenToString()
  }
abstractDelimitedValuesBlobColumnParser
 description A CSV, TSV, or other delimited blob of text.
 // todo: figure out how we want to dump these in CSV export.
 extends abstractStringBlobColumnParser
uscsTableParser
 cells columnNameCell yearCell
 description What is the data for this year from https://www.cdc.gov/cancer/uscs/dataviz/download_data.htm?
 extends abstractDelimitedValuesBlobColumnParser
 string sourceDomain cdc.gov
abstractCodeColumnParser
 extends abstractStringBlobColumnParser
 baseParser blobParser
abstractOneWordGuidColumnParser
 string typeForCsvDocs guid
 cells columnNameCell externalGuidCell
 extends abstractTrueBaseColumnParser
 description Use when you have a column that serves as a Globally Unique Identifier (GUID) where the GUID does not contain spaces.
abstractMultiwordGuidColumnParser
 string typeForCsvDocs guid
 description Use when you have a column that serves as a Globally Unique Identifier (GUID) where the GUID can contain spaces.
 catchAllCellType externalGuidCell
 extends abstractTrueBaseColumnParser
cancerdbParser
 root
 description A database containing all the key data on cancer in one file.
 catchAllParser trueBaseErrorParser
 inScope blankLineParser abstractTrueBaseColumnParser
 string fileExtension cdb
 sortTemplate title type mainType uscsId tissue cancerTypes uscsDeathsPerYear uscsCasesPerYear uscsMortalityRate appeared oldName nextDate closed publicationFrequency originCommunity parentOrganization company standsFor author description isOpenSource isPublicDomain aka tradenames related  oncoTreeId parentOncoTreeId umls nciCode oncoTreeLevel subTypes  pdf journal  website coursera githubRepo eventsPage subreddit wikipedia cancerDotGov cancerDotOrg gco reference wolframAlpha youTube amazon github abstractSocialMediaParser  youTube  phoneNumber  country city members  nciDesignation nciLink nciImage hostSchool usNewsRank  routesOfAdministration kegg drugBank medlinePlus pubChem  ein englandAndWalesCharityDetails charityNavigator guideStar greatNonProfits  annualDeathsReport  uscsTable  domainName  investorRelationsPage nyse nasdaq
 example
  title CancerDB
  type onlineDatabase website
  appeared 2022
  website https://cancerdb.com/
blankLineParser
 description Blank lines are okay.
 cells blankCell
 compiler
  stringTemplate 
 pattern ^$
 tags doNotSynthesize
 boolean shouldSerialize false
trueBaseErrorParser
 baseParser errorParser
urlCitationParser
 description Can serve as a catch all for linking to a source for columns.
 cells urlCell
annualPopulationCountParser
 cells yearCell populationCountCell
 uniqueFirstWord`)
        get handGrammarProgram() {
          return this.constructor.cachedHandGrammarProgramRoot
      }
static rootParser = cancerdbParser
    }

class blankLineParser extends GrammarBackedNode {
      get blankCell() {
      return this.getWord(0)
    }
get shouldSerialize() { return false }
    }

class trueBaseErrorParser extends GrammarBackedNode {
      getErrors() { return this._getErrorParserErrors() }
    }

class urlCitationParser extends GrammarBackedNode {
      get urlCell() {
      return this.getWord(0)
    }
    }

class annualPopulationCountParser extends GrammarBackedNode {
      get yearCell() {
      return parseFloat(this.getWord(0))
    }
get populationCountCell() {
      return parseFloat(this.getWord(1))
    }
    }

window.cancerdbParser = cancerdbParser
}