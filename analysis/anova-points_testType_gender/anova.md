ANOVA test for `activityPoints`\~`testType`\*`gender`
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
    -   [Assumption: Homogeneity of data
        distribution](#assumption-homogeneity-of-data-distribution)
-   [Saving the Data with Normal Distribution Used for Performing ANOVA
    test](#saving-the-data-with-normal-distribution-used-for-performing-anova-test)
-   [Computation of ANOVA test and Pairwise
    Comparison](#computation-of-anova-test-and-pairwise-comparison)
    -   [ANOVA test](#anova-test)
    -   [Pairwise comparison](#pairwise-comparison)
    -   [Descriptive Statistic of Estimated Marginal
        Means](#descriptive-statistic-of-estimated-marginal-means)
    -   [Anova plots for the dependent variable
        “activityPoints”](#anova-plots-for-the-dependent-variable-activitypoints)
    -   [Textual Report](#textual-report)
-   [Tips and References](#tips-and-references)

## Initial Variables and Data

-   R-script file: [../code/anova.R](../code/anova.R)
-   Initial table file:
    [../data/initial-table.csv](../data/initial-table.csv)
-   Data for activityPoints
    [../data/table-for-activityPoints.csv](../data/table-for-activityPoints.csv)
-   Table without outliers and normal distribution of data:
    [../data/table-with-normal-distribution.csv](../data/table-with-normal-distribution.csv)
-   Other data files: [../data/](../data/)
-   Files related to the presented results: [../results/](../results/)

### Descriptive statistics of initial data

| testType | gender | variable       |   n |   mean | median | min | max |    sd |    se |    ci |  iqr | symmetry | skewness | kurtosis |
|:---------|:-------|:---------------|----:|-------:|-------:|----:|----:|------:|------:|------:|-----:|:---------|---------:|---------:|
| default  | Homem  | activityPoints |  21 | 16.095 |     16 |  12 |  20 | 2.278 | 0.497 | 1.037 | 3.00 | YES      |   -0.063 |   -1.034 |
| default  | Mulher | activityPoints |  19 | 14.263 |     15 |   9 |  19 | 2.884 | 0.662 | 1.390 | 4.50 | YES      |   -0.210 |   -1.148 |
| stFemale | Homem  | activityPoints |  18 | 16.556 |     17 |  13 |  19 | 1.886 | 0.444 | 0.938 | 2.75 | YES      |   -0.380 |   -1.180 |
| stFemale | Mulher | activityPoints |  25 | 14.400 |     15 |   3 |  19 | 3.379 | 0.676 | 1.395 | 2.00 | NO       |   -1.645 |    2.994 |
| stMale   | Homem  | activityPoints |  25 | 15.840 |     17 |   3 |  20 | 3.955 | 0.791 | 1.632 | 3.00 | NO       |   -1.690 |    2.671 |
| stMale   | Mulher | activityPoints |  14 | 14.643 |     15 |  11 |  18 | 2.134 | 0.570 | 1.232 | 3.00 | YES      |   -0.095 |   -1.440 |
| NA       | NA     | activityPoints | 122 | 15.311 |     16 |   3 |  20 | 3.040 | 0.275 | 0.545 | 3.75 | NO       |   -1.354 |    3.068 |

![](anova_files/figure-gfm/unnamed-chunk-5-1.png)<!-- -->

    ## [1] "P64" "P88" "P55" "P74" "P93"

## Checking of Assumptions

### Assumption: Symmetry and treatment of outliers

#### Applying transformation for skewness data when normality is not achieved

#### Dealing with outliers (performing treatment of outliers)

``` r
rdat[["activityPoints"]] <- winzorize(rdat[["activityPoints"]],"activityPoints", c("testType","gender"))
```

### Assumption: Normality distribution of data

#### Removing data that affect normality (extreme values)

``` r
non.normal <- list(
"activityPoints" = c("P41","P64","P88","P92","P94","P95","P74","P93")
)
sdat <- removeFromDataTable(rdat, non.normal, wid)
```

#### Result of normality test in the residual model

|                | var            |   n | skewness | kurtosis | symmetry | statistic | method     |     p | p.signif | normality |
|:---------------|:---------------|----:|---------:|---------:|:---------|----------:|:-----------|------:|:---------|:----------|
| activityPoints | activityPoints | 114 |   -0.322 |   -0.611 | YES      |     4.326 | D’Agostino | 0.115 | ns       | QQ        |

#### Result of normality test in each group

This is an optional validation and only valid for groups with number
greater than 30 observations

| testType | gender | variable       |   n |   mean | median |   min |   max |    sd |    se |    ci |  iqr | normality | method       | statistic |     p | p.signif |
|:---------|:-------|:---------------|----:|-------:|-------:|------:|------:|------:|------:|------:|-----:|:----------|:-------------|----------:|------:|:---------|
| default  | Homem  | activityPoints |  21 | 16.048 |     16 | 12.00 | 19.00 | 2.202 | 0.480 | 1.002 | 3.00 | YES       | Shapiro-Wilk |     0.926 | 0.117 | ns       |
| default  | Mulher | activityPoints |  19 | 14.274 |     15 | 10.05 | 18.10 | 2.704 | 0.620 | 1.303 | 4.50 | YES       | Shapiro-Wilk |     0.911 | 0.078 | ns       |
| stFemale | Homem  | activityPoints |  18 | 16.603 |     17 | 13.85 | 19.00 | 1.800 | 0.424 | 0.895 | 2.75 | YES       | Shapiro-Wilk |     0.897 | 0.050 | ns       |
| stFemale | Mulher | activityPoints |  23 | 15.133 |     15 | 10.05 | 18.00 | 1.955 | 0.408 | 0.845 | 2.00 | YES       | Shapiro-Wilk |     0.919 | 0.064 | ns       |
| stMale   | Homem  | activityPoints |  19 | 17.211 |     18 | 14.00 | 19.00 | 1.512 | 0.347 | 0.729 | 2.00 | YES       | Shapiro-Wilk |     0.906 | 0.062 | ns       |
| stMale   | Mulher | activityPoints |  14 | 14.643 |     15 | 11.65 | 17.35 | 1.980 | 0.529 | 1.143 | 3.00 | YES       | Shapiro-Wilk |     0.899 | 0.108 | ns       |

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

### Assumption: Homogeneity of data distribution

|                | var            | method        | formula                                |   n | df1 | df2 | statistic |     p | p.signif |
|:---------------|:---------------|:--------------|:---------------------------------------|----:|----:|----:|----------:|------:|:---------|
| activityPoints | activityPoints | Levene’s test | `activityPoints`\~`testType`\*`gender` | 114 |   5 | 108 |      1.13 | 0.349 | ns       |

## Saving the Data with Normal Distribution Used for Performing ANOVA test

``` r
ndat <- sdat[[1]]
for (dv in names(sdat)[-1]) ndat <- merge(ndat, sdat[[dv]])
write.csv(ndat, paste0("../data/table-with-normal-distribution.csv"))
```

Descriptive statistics of data with normal distribution

|                  | testType | gender | variable       |   n |   mean | median |   min |   max |    sd |    se |    ci |  iqr |
|:-----------------|:---------|:-------|:---------------|----:|-------:|-------:|------:|------:|------:|------:|------:|-----:|
| activityPoints.1 | default  | Homem  | activityPoints |  21 | 16.048 |     16 | 12.00 | 19.00 | 2.202 | 0.480 | 1.002 | 3.00 |
| activityPoints.2 | default  | Mulher | activityPoints |  19 | 14.274 |     15 | 10.05 | 18.10 | 2.704 | 0.620 | 1.303 | 4.50 |
| activityPoints.3 | stFemale | Homem  | activityPoints |  18 | 16.603 |     17 | 13.85 | 19.00 | 1.800 | 0.424 | 0.895 | 2.75 |
| activityPoints.4 | stFemale | Mulher | activityPoints |  23 | 15.133 |     15 | 10.05 | 18.00 | 1.955 | 0.408 | 0.845 | 2.00 |
| activityPoints.5 | stMale   | Homem  | activityPoints |  19 | 17.211 |     18 | 14.00 | 19.00 | 1.512 | 0.347 | 0.729 | 2.00 |
| activityPoints.6 | stMale   | Mulher | activityPoints |  14 | 14.643 |     15 | 11.65 | 17.35 | 1.980 | 0.529 | 1.143 | 3.00 |

![](anova_files/figure-gfm/unnamed-chunk-17-1.png)<!-- -->

## Computation of ANOVA test and Pairwise Comparison

### ANOVA test

| var            | Effect          | DFn | DFd |     SSn |     SSd |      F |     p |   ges | p.signif |
|:---------------|:----------------|----:|----:|--------:|--------:|-------:|------:|------:|:---------|
| activityPoints | testType        |   2 | 108 |  15.658 | 459.842 |  1.839 | 0.164 | 0.033 | ns       |
| activityPoints | gender          |   1 | 108 | 100.742 | 459.842 | 23.661 | 0.000 | 0.180 | \*\*\*\* |
| activityPoints | testType:gender |   2 | 108 |   5.616 | 459.842 |  0.659 | 0.519 | 0.012 | ns       |

### Pairwise comparison

| var            | testType | gender | group1   | group2   | estimate | conf.low | conf.high |    se | statistic |     p | p.adj | p.adj.signif |
|:---------------|:---------|:-------|:---------|:---------|---------:|---------:|----------:|------:|----------:|------:|------:|:-------------|
| activityPoints | NA       | Homem  | default  | stFemale |   -0.555 |   -1.869 |     0.759 | 0.663 |    -0.838 | 0.404 | 1.000 | ns           |
| activityPoints | NA       | Homem  | default  | stMale   |   -1.163 |   -2.458 |     0.132 | 0.653 |    -1.780 | 0.078 | 0.234 | ns           |
| activityPoints | NA       | Homem  | stFemale | stMale   |   -0.608 |   -1.953 |     0.738 | 0.679 |    -0.895 | 0.373 | 1.000 | ns           |
| activityPoints | NA       | Mulher | default  | stFemale |   -0.859 |   -2.127 |     0.409 | 0.640 |    -1.343 | 0.182 | 0.547 | ns           |
| activityPoints | NA       | Mulher | default  | stMale   |   -0.369 |   -1.810 |     1.071 | 0.727 |    -0.508 | 0.613 | 1.000 | ns           |
| activityPoints | NA       | Mulher | stFemale | stMale   |    0.490 |   -0.897 |     1.876 | 0.699 |     0.700 | 0.485 | 1.000 | ns           |
| activityPoints | default  | NA     | Homem    | Mulher   |    1.774 |    0.479 |     3.069 | 0.653 |     2.715 | 0.008 | 0.008 | \*\*         |
| activityPoints | stFemale | NA     | Homem    | Mulher   |    1.470 |    0.183 |     2.757 | 0.649 |     2.264 | 0.026 | 0.026 | \*           |
| activityPoints | stMale   | NA     | Homem    | Mulher   |    2.568 |    1.127 |     4.008 | 0.727 |     3.533 | 0.001 | 0.001 | \*\*\*       |

### Descriptive Statistic of Estimated Marginal Means

| var            | testType | gender |   n | emmean |   mean | conf.low | conf.high |    sd | sd.emms | se.emms |
|:---------------|:---------|:-------|----:|-------:|-------:|---------:|----------:|------:|--------:|--------:|
| activityPoints | default  | Homem  |  21 | 16.048 | 16.048 |   15.155 |    16.940 | 2.202 |   2.063 |   0.450 |
| activityPoints | default  | Mulher |  19 | 14.274 | 14.274 |   13.335 |    15.212 | 2.704 |   2.063 |   0.473 |
| activityPoints | stFemale | Homem  |  18 | 16.603 | 16.603 |   15.639 |    17.567 | 1.800 |   2.063 |   0.486 |
| activityPoints | stFemale | Mulher |  23 | 15.133 | 15.133 |   14.280 |    15.985 | 1.955 |   2.063 |   0.430 |
| activityPoints | stMale   | Homem  |  19 | 17.211 | 17.211 |   16.272 |    18.149 | 1.512 |   2.063 |   0.473 |
| activityPoints | stMale   | Mulher |  14 | 14.643 | 14.643 |   13.550 |    15.736 | 1.980 |   2.063 |   0.551 |

### Anova plots for the dependent variable “activityPoints”

``` r
plots <- twoWayAnovaPlots(sdat[["activityPoints"]], "activityPoints", between, aov[["activityPoints"]], pwc[["activityPoints"]], c("jitter"), font.label.size=14, step.increase=0.25)
```

#### Plot of “activityPoints” based on “testType” (color: gender)

``` r
plots[["testType"]]
```

![](anova_files/figure-gfm/unnamed-chunk-25-1.png)<!-- -->

#### Plot of “activityPoints” based on “gender” (color: testType)

``` r
plots[["gender"]]
```

![](anova_files/figure-gfm/unnamed-chunk-26-1.png)<!-- -->

### Textual Report

ANOVA tests with independent between-subjects variables “testType”
(default, stFemale, stMale) and “gender” (Homem, Mulher) were performed
to determine statistically significant difference on the dependent
varibles “activityPoints”. For the dependent variable “activityPoints”,
there was statistically significant effects in the factor “gender” with
F(1,108)=23.661, p\<0.001 and ges=0.18 (effect size).

Pairwise comparisons using the Estimated Marginal Means (EMMs) were
computed to find statistically significant diferences among the groups
defined by the independent variables, and with the p-values ajusted by
the method “bonferroni”. For the dependent variable “activityPoints”,
the mean in the gender=“Homem” (adj M=16.048 and SD=2.202) was
significantly different than the mean in the gender=“Mulher” (adj
M=14.274 and SD=2.704) with p-adj=0.008; the mean in the gender=“Homem”
(adj M=16.603 and SD=1.8) was significantly different than the mean in
the gender=“Mulher” (adj M=15.133 and SD=1.955) with p-adj=0.026; the
mean in the gender=“Homem” (adj M=17.211 and SD=1.512) was significantly
different than the mean in the gender=“Mulher” (adj M=14.643 and
SD=1.98) with p-adj\<0.001.

## Tips and References

-   Use the site <https://www.tablesgenerator.com> to convert the HTML
    tables into Latex format

-   \[2\]: Miot, H. A. (2017). Assessing normality of data in clinical
    and experimental trials. J Vasc Bras, 16(2), 88-91.

-   \[3\]: Bárány, Imre; Vu, Van (2007). “Central limit theorems for
    Gaussian polytopes”. Annals of Probability. Institute of
    Mathematical Statistics. 35 (4): 1593–1621.