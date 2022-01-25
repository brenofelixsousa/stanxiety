ANCOVA test for `fss`\~`dfs`+`condition`
================
Geiser C. Challco <geiser@alumni.usp.br>

-   [Initial Variables and Data](#initial-variables-and-data)
    -   [Descriptive statistics of initial
        data](#descriptive-statistics-of-initial-data)
-   [Checking of Assumptions](#checking-of-assumptions)
    -   [Assumption: Symmetry and treatment of
        outliers](#assumption-symmetry-and-treatment-of-outliers)
    -   [Assumption: Normality distribution of
        data](#assumption-normality-distribution-of-data)
    -   [Assumption: Linearity of dependent variables and covariate
        variable](#assumption-linearity-of-dependent-variables-and-covariate-variable)
    -   [Assumption: Homogeneity of data
        distribution](#assumption-homogeneity-of-data-distribution)
-   [Saving the Data with Normal Distribution Used for Performing ANCOVA
    test](#saving-the-data-with-normal-distribution-used-for-performing-ancova-test)
-   [Computation of ANCOVA test and Pairwise
    Comparison](#computation-of-ancova-test-and-pairwise-comparison)
    -   [ANCOVA test](#ancova-test)
    -   [Pairwise comparison](#pairwise-comparison)
    -   [Descriptive Statistic of Estimated Marginal
        Means](#descriptive-statistic-of-estimated-marginal-means)
    -   [Ancova plots for the dependent variable
        “fss”](#ancova-plots-for-the-dependent-variable-fss)
    -   [Textual Report](#textual-report)
-   [Tips and References](#tips-and-references)

## Initial Variables and Data

-   R-script file: [../code/ancova.R](../code/ancova.R)
-   Initial table file:
    [../data/initial-table.csv](../data/initial-table.csv)
-   Data for fss [../data/table-for-fss.csv](../data/table-for-fss.csv)
-   Table without outliers and normal distribution of data:
    [../data/table-with-normal-distribution.csv](../data/table-with-normal-distribution.csv)
-   Other data files: [../data/](../data/)
-   Files related to the presented results: [../results/](../results/)

### Descriptive statistics of initial data

| condition | variable |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr | symmetry | skewness | kurtosis |
|:----------|:---------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|:---------|---------:|---------:|
| control   | fss      |  40 | 3.850 |  3.778 | 2.778 | 5.000 | 0.644 | 0.102 | 0.206 | 1.028 | YES      |    0.042 |   -1.122 |
| inBoost   | fss      |  50 | 3.773 |  3.889 | 1.778 | 4.778 | 0.658 | 0.093 | 0.187 | 0.861 | NO       |   -0.897 |    0.514 |
| inThreat  | fss      |  32 | 3.922 |  4.111 | 1.889 | 5.000 | 0.702 | 0.124 | 0.253 | 0.944 | NO       |   -0.888 |    0.417 |
| NA        | fss      | 122 | 3.837 |  3.889 | 1.778 | 5.000 | 0.662 | 0.060 | 0.119 | 0.972 | NO       |   -0.613 |    0.131 |

![](ancova_files/figure-gfm/unnamed-chunk-5-1.png)<!-- -->

    ## [1] "P118"

## Checking of Assumptions

### Assumption: Symmetry and treatment of outliers

#### Applying transformation for skewness data when normality is not achieved

#### Dealing with outliers (performing treatment of outliers)

``` r
rdat[["fss"]] <- winzorize(rdat[["fss"]],"fss", c("condition"),covar)
```

### Assumption: Normality distribution of data

#### Removing data that affect normality (extreme values)

``` r
non.normal <- list(
"fss" = c("P79","P86","P19","P24","P51","P55","P90","P118","P124","P94","P67","P97","P99")
)
sdat <- removeFromDataTable(rdat, non.normal, wid)
```

#### Result of normality test in the residual model

|     | var |   n | skewness | kurtosis | symmetry | statistic | method     |     p | p.signif | normality |
|:----|:----|----:|---------:|---------:|:---------|----------:|:-----------|------:|:---------|:----------|
| fss | fss | 109 |    0.044 |   -0.335 | YES      |     0.228 | D’Agostino | 0.892 | ns       | QQ        |

#### Result of normality test in each group

This is an optional validation and only valid for groups with number
greater than 30 observations

| condition | variable |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr | normality | method       | statistic |     p | p.signif |
|:----------|:---------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|:----------|:-------------|----------:|------:|:---------|
| control   | fss      |  38 | 3.845 |  3.778 | 2.883 | 4.778 | 0.594 | 0.096 | 0.195 | 0.972 | YES       | Shapiro-Wilk |     0.948 | 0.074 | ns       |
| inBoost   | fss      |  41 | 3.772 |  3.778 | 2.778 | 4.444 | 0.461 | 0.072 | 0.146 | 0.667 | YES       | Shapiro-Wilk |     0.946 | 0.052 | ns       |
| inThreat  | fss      |  30 | 3.959 |  4.111 | 2.839 | 4.778 | 0.558 | 0.102 | 0.209 | 0.833 | YES       | Shapiro-Wilk |     0.931 | 0.051 | ns       |

**Observation**:

As sample sizes increase, parametric tests remain valid even with the
violation of normality \[[1](#references)\]. According to the central
limit theorem, the sampling distribution tends to be normal if the
sample is large, more than (`n > 30`) observations. Therefore, we
performed parametric tests with large samples as described as follows:

-   In cases with the sample size greater than 100 (`n > 100`), we
    adopted a significance level of `p < 0.01`

-   For samples with `n > 50` observation, we adopted D’Agostino-Pearson
    test that offers better accuracy for larger samples
    \[[2](#references)\].

-   For samples’ size between `n > 100` and `n <= 200`, we ignored the
    normality test, and our decision of validating normality was based
    only in the interpretation of QQ-plots and histograms because the
    Shapiro-Wilk and D’Agostino-Pearson tests tend to be too sensitive
    with values greater than 200 observation \[[3](#references)\].

-   For samples with `n > 200` observation, we ignore the normality
    assumption based on the central theorem limit.

### Assumption: Linearity of dependent variables and covariate variable

``` r
ggscatter(sdat[["fss"]], x=covar, y="fss", facet.by=between, short.panel.labs = F) + 
 stat_smooth(method = "lm", span = 0.9)
```

    ## `geom_smooth()` using formula 'y ~ x'

![](ancova_files/figure-gfm/unnamed-chunk-12-1.png)<!-- -->

### Assumption: Homogeneity of data distribution

|       | var | method         | formula             |   n | DFn.df1 | DFd.df2 | statistic |     p | p.signif |
|:------|:----|:---------------|:--------------------|----:|--------:|--------:|----------:|------:|:---------|
| fss.1 | fss | Levene’s test  | `.res`\~`condition` | 109 |       2 |     106 |     2.031 | 0.136 | ns       |
| fss.2 | fss | Anova’s slopes | `.res`\~`condition` | 109 |       2 |     103 |     0.185 | 0.832 | ns       |

## Saving the Data with Normal Distribution Used for Performing ANCOVA test

``` r
ndat <- sdat[[1]]
for (dv in names(sdat)[-1]) ndat <- merge(ndat, sdat[[dv]])
write.csv(ndat, paste0("../data/table-with-normal-distribution.csv"))
```

Descriptive statistics of data with normal distribution

|       | condition | variable |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr |
|:------|:----------|:---------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|
| fss.1 | control   | fss      |  38 | 3.845 |  3.778 | 2.883 | 4.778 | 0.594 | 0.096 | 0.195 | 0.972 |
| fss.2 | inBoost   | fss      |  41 | 3.772 |  3.778 | 2.778 | 4.444 | 0.461 | 0.072 | 0.146 | 0.667 |
| fss.3 | inThreat  | fss      |  30 | 3.959 |  4.111 | 2.839 | 4.778 | 0.558 | 0.102 | 0.209 | 0.833 |

![](ancova_files/figure-gfm/unnamed-chunk-18-1.png)<!-- -->

## Computation of ANCOVA test and Pairwise Comparison

### ANCOVA test

| var | Effect    | DFn | DFd |   SSn |    SSd |     F |     p |   ges | p.signif |
|:----|:----------|----:|----:|------:|-------:|------:|------:|------:|:---------|
| fss | dfs       |   1 | 105 | 6.160 | 24.436 | 26.47 | 0.000 | 0.201 | \*\*\*\* |
| fss | condition |   2 | 105 | 0.707 | 24.436 |  1.52 | 0.224 | 0.028 | ns       |

### Pairwise comparison

| var | group1  | group2   | estimate | conf.low | conf.high |    se | statistic |     p | p.adj | p.adj.signif |
|:----|:--------|:---------|---------:|---------:|----------:|------:|----------:|------:|------:|:-------------|
| fss | control | inBoost  |    0.027 |   -0.189 |     0.243 | 0.109 |     0.248 | 0.805 | 1.000 | ns           |
| fss | control | inThreat |   -0.165 |   -0.399 |     0.070 | 0.118 |    -1.392 | 0.167 | 0.500 | ns           |
| fss | inBoost | inThreat |   -0.192 |   -0.421 |     0.038 | 0.116 |    -1.654 | 0.101 | 0.304 | ns           |

### Descriptive Statistic of Estimated Marginal Means

| var | condition |   dfs | emmean | se.emms |  df | conf.low | conf.high | method       |   n |  mean | median |   min |   max |    sd | se.ds |    ci |   iqr | n.dfs | mean.dfs | median.dfs | min.dfs | max.dfs | sd.dfs | se.dfs | ci.dfs | iqr.dfs | sd.emms |
|:----|:----------|------:|-------:|--------:|----:|---------:|----------:|:-------------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|------:|---------:|-----------:|--------:|--------:|-------:|-------:|-------:|--------:|--------:|
| fss | control   | 3.514 |  3.814 |   0.078 | 105 |    3.658 |     3.970 | Emmeans test |  38 | 3.845 |  3.778 | 2.883 | 4.778 | 0.594 | 0.096 | 0.195 | 0.972 |    38 |    3.573 |      3.556 |   2.778 |   4.122 |  0.368 |  0.060 |  0.121 |   0.528 |   0.484 |
| fss | inBoost   | 3.514 |  3.787 |   0.075 | 105 |    3.637 |     3.936 | Emmeans test |  41 | 3.772 |  3.778 | 2.778 | 4.444 | 0.461 | 0.072 | 0.146 | 0.667 |    41 |    3.486 |      3.444 |   2.444 |   4.333 |  0.501 |  0.078 |  0.158 |   0.667 |   0.483 |
| fss | inThreat  | 3.514 |  3.979 |   0.088 | 105 |    3.804 |     4.153 | Emmeans test |  30 | 3.959 |  4.111 | 2.839 | 4.778 | 0.558 | 0.102 | 0.209 | 0.833 |    30 |    3.477 |      3.500 |   2.556 |   4.272 |  0.511 |  0.093 |  0.191 |   0.556 |   0.483 |

### Ancova plots for the dependent variable “fss”

``` r
plots <- oneWayAncovaPlots(sdat[["fss"]], "fss", between
, aov[["fss"]], pwc[["fss"]], addParam = c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot for: `fss` \~ `condition`

``` r
plots[["condition"]]
```

![](ancova_files/figure-gfm/unnamed-chunk-26-1.png)<!-- -->

### Textual Report

After controlling the linearity of covariance “dfs”, ANCOVA tests with
independent between-subjects variables “condition” (control, inBoost,
inThreat) were performed to determine statistically significant
difference on the dependent varibles “fss”. For the dependent variable
“fss”, there was statistically significant effects in the factor “dfs”
with F(1,105)=26.47, p\<0.001 and ges=0.201 (effect size).

## Tips and References

-   Use the site <https://www.tablesgenerator.com> to convert the HTML
    tables into Latex format

-   \[2\]: Miot, H. A. (2017). Assessing normality of data in clinical
    and experimental trials. J Vasc Bras, 16(2), 88-91.

-   \[3\]: Bárány, Imre; Vu, Van (2007). “Central limit theorems for
    Gaussian polytopes”. Annals of Probability. Institute of
    Mathematical Statistics. 35 (4): 1593–1621.