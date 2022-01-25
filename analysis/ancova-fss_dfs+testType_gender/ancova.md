ANCOVA test for `fss`\~`dfs`+`testType`\*`gender`
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

| testType | gender | variable |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr | symmetry | skewness | kurtosis |
|:---------|:-------|:---------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|:---------|---------:|---------:|
| default  | Homem  | fss      |  21 | 3.921 |  3.889 | 2.778 | 4.889 | 0.586 | 0.128 | 0.267 | 0.778 | YES      |   -0.110 |   -1.037 |
| default  | Mulher | fss      |  19 | 3.772 |  3.778 | 2.778 | 5.000 | 0.710 | 0.163 | 0.342 | 1.111 | YES      |    0.234 |   -1.317 |
| stFemale | Homem  | fss      |  18 | 4.170 |  4.222 | 3.222 | 4.778 | 0.404 | 0.095 | 0.201 | 0.417 | NO       |   -0.807 |   -0.177 |
| stFemale | Mulher | fss      |  25 | 3.662 |  3.889 | 1.778 | 4.667 | 0.794 | 0.159 | 0.328 | 0.889 | NO       |   -0.742 |   -0.485 |
| stMale   | Homem  | fss      |  25 | 3.884 |  3.889 | 3.000 | 4.778 | 0.477 | 0.095 | 0.197 | 0.778 | YES      |   -0.101 |   -1.137 |
| stMale   | Mulher | fss      |  14 | 3.603 |  3.500 | 1.889 | 5.000 | 0.876 | 0.234 | 0.506 | 1.083 | YES      |   -0.131 |   -0.902 |
| NA       | NA     | fss      | 122 | 3.837 |  3.889 | 1.778 | 5.000 | 0.662 | 0.060 | 0.119 | 0.972 | NO       |   -0.613 |    0.131 |

![](ancova_files/figure-gfm/unnamed-chunk-5-1.png)<!-- -->

    ## [1] "P33"  "P118"

## Checking of Assumptions

### Assumption: Symmetry and treatment of outliers

#### Applying transformation for skewness data when normality is not achieved

#### Dealing with outliers (performing treatment of outliers)

``` r
rdat[["fss"]] <- winzorize(rdat[["fss"]],"fss", c("testType","gender"),covar)
```

### Assumption: Normality distribution of data

#### Removing data that affect normality (extreme values)

``` r
non.normal <- list(
"fss" = c("P55","P67","P15","P94","P83")
)
sdat <- removeFromDataTable(rdat, non.normal, wid)
```

#### Result of normality test in the residual model

|     | var |   n | skewness | kurtosis | symmetry | statistic | method     |     p | p.signif | normality |
|:----|:----|----:|---------:|---------:|:---------|----------:|:-----------|------:|:---------|:----------|
| fss | fss | 117 |    0.193 |   -0.011 | YES      |     0.977 | D’Agostino | 0.614 | ns       | QQ        |

#### Result of normality test in each group

This is an optional validation and only valid for groups with number
greater than 30 observations

| testType | gender | variable |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr | normality | method       | statistic |     p | p.signif |
|:---------|:-------|:---------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|:----------|:-------------|----------:|------:|:---------|
| default  | Homem  | fss      |  21 | 3.926 |  3.889 | 3.000 | 4.778 | 0.557 | 0.122 | 0.254 | 0.778 | YES       | Shapiro-Wilk |     0.949 | 0.321 | ns       |
| default  | Mulher | fss      |  19 | 3.760 |  3.778 | 2.878 | 4.778 | 0.673 | 0.154 | 0.324 | 1.111 | YES       | Shapiro-Wilk |     0.918 | 0.106 | ns       |
| stFemale | Homem  | fss      |  17 | 4.212 |  4.222 | 3.411 | 4.589 | 0.327 | 0.079 | 0.168 | 0.333 | YES       | Shapiro-Wilk |     0.907 | 0.090 | ns       |
| stFemale | Mulher | fss      |  23 | 3.748 |  3.889 | 2.778 | 4.644 | 0.601 | 0.125 | 0.260 | 0.778 | YES       | Shapiro-Wilk |     0.920 | 0.066 | ns       |
| stMale   | Homem  | fss      |  23 | 3.884 |  3.889 | 3.222 | 4.444 | 0.420 | 0.088 | 0.182 | 0.667 | YES       | Shapiro-Wilk |     0.922 | 0.072 | ns       |
| stMale   | Mulher | fss      |  14 | 3.659 |  3.500 | 2.778 | 4.778 | 0.702 | 0.188 | 0.405 | 1.083 | YES       | Shapiro-Wilk |     0.921 | 0.224 | ns       |

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

|       | var | method         | formula                      |   n | DFn.df1 | DFd.df2 | statistic |     p | p.signif |
|:------|:----|:---------------|:-----------------------------|----:|--------:|--------:|----------:|------:|:---------|
| fss.1 | fss | Levene’s test  | `.res`\~`testType`\*`gender` | 117 |       5 |     111 |     2.108 | 0.070 | ns       |
| fss.2 | fss | Anova’s slopes | `.res`\~`testType`\*`gender` | 117 |       5 |     105 |     0.391 | 0.854 | ns       |

## Saving the Data with Normal Distribution Used for Performing ANCOVA test

``` r
ndat <- sdat[[1]]
for (dv in names(sdat)[-1]) ndat <- merge(ndat, sdat[[dv]])
write.csv(ndat, paste0("../data/table-with-normal-distribution.csv"))
```

Descriptive statistics of data with normal distribution

|       | testType | gender | variable |   n |  mean | median |   min |   max |    sd |    se |    ci |   iqr |
|:------|:---------|:-------|:---------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|
| fss.1 | default  | Homem  | fss      |  21 | 3.926 |  3.889 | 3.000 | 4.778 | 0.557 | 0.122 | 0.254 | 0.778 |
| fss.2 | default  | Mulher | fss      |  19 | 3.760 |  3.778 | 2.878 | 4.778 | 0.673 | 0.154 | 0.324 | 1.111 |
| fss.3 | stFemale | Homem  | fss      |  17 | 4.212 |  4.222 | 3.411 | 4.589 | 0.327 | 0.079 | 0.168 | 0.333 |
| fss.4 | stFemale | Mulher | fss      |  23 | 3.748 |  3.889 | 2.778 | 4.644 | 0.601 | 0.125 | 0.260 | 0.778 |
| fss.5 | stMale   | Homem  | fss      |  23 | 3.884 |  3.889 | 3.222 | 4.444 | 0.420 | 0.088 | 0.182 | 0.667 |
| fss.6 | stMale   | Mulher | fss      |  14 | 3.659 |  3.500 | 2.778 | 4.778 | 0.702 | 0.188 | 0.405 | 1.083 |

![](ancova_files/figure-gfm/unnamed-chunk-18-1.png)<!-- -->

## Computation of ANCOVA test and Pairwise Comparison

### ANCOVA test

| var | Effect          | DFn | DFd |   SSn |   SSd |      F |     p |   ges | p.signif |
|:----|:----------------|----:|----:|------:|------:|-------:|------:|------:|:---------|
| fss | dfs             |   1 | 110 | 8.017 | 26.28 | 33.557 | 0.000 | 0.234 | \*\*\*\* |
| fss | testType        |   2 | 110 | 1.124 | 26.28 |  2.352 | 0.100 | 0.041 | ns       |
| fss | gender          |   1 | 110 | 0.065 | 26.28 |  0.271 | 0.604 | 0.002 | ns       |
| fss | testType:gender |   2 | 110 | 0.319 | 26.28 |  0.668 | 0.515 | 0.012 | ns       |

### Pairwise comparison

| var | testType | gender | group1   | group2   | estimate | conf.low | conf.high |    se | statistic |     p | p.adj | p.adj.signif |
|:----|:---------|:-------|:---------|:---------|---------:|---------:|----------:|------:|----------:|------:|------:|:-------------|
| fss | NA       | Homem  | default  | stFemale |   -0.276 |   -0.592 |     0.040 | 0.159 |    -1.729 | 0.087 | 0.260 | ns           |
| fss | NA       | Homem  | default  | stMale   |    0.066 |   -0.227 |     0.358 | 0.148 |     0.447 | 0.656 | 1.000 | ns           |
| fss | NA       | Homem  | stFemale | stMale   |    0.342 |    0.032 |     0.652 | 0.156 |     2.185 | 0.031 | 0.093 | ns           |
| fss | NA       | Mulher | default  | stFemale |   -0.146 |   -0.451 |     0.159 | 0.154 |    -0.949 | 0.345 | 1.000 | ns           |
| fss | NA       | Mulher | default  | stMale   |   -0.068 |   -0.414 |     0.278 | 0.175 |    -0.388 | 0.699 | 1.000 | ns           |
| fss | NA       | Mulher | stFemale | stMale   |    0.078 |   -0.250 |     0.407 | 0.166 |     0.473 | 0.637 | 1.000 | ns           |
| fss | default  | NA     | Homem    | Mulher   |    0.048 |   -0.262 |     0.357 | 0.156 |     0.306 | 0.760 | 0.760 | ns           |
| fss | stFemale | NA     | Homem    | Mulher   |    0.177 |   -0.148 |     0.502 | 0.164 |     1.082 | 0.282 | 0.282 | ns           |
| fss | stMale   | NA     | Homem    | Mulher   |   -0.086 |   -0.431 |     0.259 | 0.174 |    -0.493 | 0.623 | 0.623 | ns           |

### Descriptive Statistic of Estimated Marginal Means

| var | testType | gender |   dfs | emmean | se.emms |  df | conf.low | conf.high | method       |   n |  mean | median |   min |   max |    sd | se.ds |    ci |   iqr | n.dfs | mean.dfs | median.dfs | min.dfs | max.dfs | sd.dfs | se.dfs | ci.dfs | iqr.dfs | sd.emms |
|:----|:---------|:-------|------:|-------:|--------:|----:|---------:|----------:|:-------------|----:|------:|-------:|------:|------:|------:|------:|------:|------:|------:|---------:|-----------:|--------:|--------:|-------:|-------:|-------:|--------:|--------:|
| fss | default  | Homem  | 3.506 |  3.824 |   0.108 | 110 |    3.610 |     4.039 | Emmeans test |  21 | 3.926 |  3.889 | 3.000 | 4.778 | 0.557 | 0.122 | 0.254 | 0.778 |    21 |    3.677 |      3.667 |   3.111 |   4.333 |  0.340 |  0.074 |  0.155 |   0.444 |   0.495 |
| fss | default  | Mulher | 3.506 |  3.777 |   0.112 | 110 |    3.554 |     3.999 | Emmeans test |  19 | 3.760 |  3.778 | 2.878 | 4.778 | 0.673 | 0.154 | 0.324 | 1.111 |    19 |    3.477 |      3.444 |   2.722 |   4.011 |  0.432 |  0.099 |  0.208 |   0.611 |   0.489 |
| fss | stFemale | Homem  | 3.506 |  4.100 |   0.120 | 110 |    3.862 |     4.338 | Emmeans test |  17 | 4.212 |  4.222 | 3.411 | 4.589 | 0.327 | 0.079 | 0.168 | 0.333 |    17 |    3.695 |      3.778 |   3.156 |   4.222 |  0.348 |  0.084 |  0.179 |   0.556 |   0.495 |
| fss | stFemale | Mulher | 3.506 |  3.923 |   0.106 | 110 |    3.712 |     4.133 | Emmeans test |  23 | 3.748 |  3.889 | 2.778 | 4.644 | 0.601 | 0.125 | 0.260 | 0.778 |    23 |    3.211 |      3.222 |   2.000 |   3.867 |  0.495 |  0.103 |  0.214 |   0.667 |   0.510 |
| fss | stMale   | Homem  | 3.506 |  3.758 |   0.104 | 110 |    3.552 |     3.965 | Emmeans test |  23 | 3.884 |  3.889 | 3.222 | 4.444 | 0.420 | 0.088 | 0.182 | 0.667 |    23 |    3.718 |      3.778 |   2.911 |   4.333 |  0.465 |  0.097 |  0.201 |   0.722 |   0.500 |
| fss | stMale   | Mulher | 3.506 |  3.844 |   0.135 | 110 |    3.578 |     4.111 | Emmeans test |  14 | 3.659 |  3.500 | 2.778 | 4.778 | 0.702 | 0.188 | 0.405 | 1.083 |    14 |    3.192 |      3.167 |   2.322 |   4.372 |  0.625 |  0.167 |  0.361 |   0.639 |   0.503 |

### Ancova plots for the dependent variable “fss”

``` r
plots <- twoWayAncovaPlots(sdat[["fss"]], "fss", between
, aov[["fss"]], pwc[["fss"]], addParam = c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot for: `fss` \~ `testType`

``` r
plots[["testType"]]
```

![](ancova_files/figure-gfm/unnamed-chunk-26-1.png)<!-- -->

#### Plot for: `fss` \~ `gender`

``` r
plots[["gender"]]
```

![](ancova_files/figure-gfm/unnamed-chunk-27-1.png)<!-- -->

### Textual Report

After controlling the linearity of covariance “dfs”, ANCOVA tests with
independent between-subjects variables “testType” (default, stFemale,
stMale) and “gender” (Homem, Mulher) were performed to determine
statistically significant difference on the dependent varibles “fss”.
For the dependent variable “fss”, there was statistically significant
effects in the factor “dfs” with F(1,110)=33.557, p\<0.001 and ges=0.234
(effect size).

## Tips and References

-   Use the site <https://www.tablesgenerator.com> to convert the HTML
    tables into Latex format

-   \[2\]: Miot, H. A. (2017). Assessing normality of data in clinical
    and experimental trials. J Vasc Bras, 16(2), 88-91.

-   \[3\]: Bárány, Imre; Vu, Van (2007). “Central limit theorems for
    Gaussian polytopes”. Annals of Probability. Institute of
    Mathematical Statistics. 35 (4): 1593–1621.